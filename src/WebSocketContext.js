import React, { createContext, useState, useEffect, useRef } from "react";
import config from "./config";
export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);
  const reconnectInterval = useRef(null);

  const connectWebSocket = () => {
    if (
      ws.current &&
      (ws.current.readyState === WebSocket.OPEN ||
        ws.current.readyState === WebSocket.CONNECTING)
    ) {
      console.log("WebSocket already connected or connecting");
      return;
    }

    console.log("WebSocket URL from config:", config.websocketUrl);
    ws.current = new WebSocket(config.websocketUrl);

    ws.current.onopen = () => {
      console.log("WebSocket Connected");
      clearInterval(reconnectInterval.current);
      reconnectInterval.current = null;
      ws.current.send(JSON.stringify({ action: "getQuotes" }));
      ws.current.send(JSON.stringify({ action: "getMessages" }));
    };

    ws.current.onerror = (event) => {
      console.error("WebSocket Error: ", event);
    };

    ws.current.onmessage = (event) => {
      let message;
      try {
        message = JSON.parse(event.data);
        console.log("Received message: ", message);
      } catch (e) {
        console.error("Failed to parse message", e);
        return;
      }

      console.log("Parsed message:", message);

      if (message.quote) {
        console.log("Message identified as a single quote:", message.quote);
        setQuotes((prevQuotes) => {
          const quoteExists = prevQuotes.some(
            (quote) => quote.id === message.quote.id
          );
          if (quoteExists) {
            return prevQuotes;
          }
          setAlerts((prevAlerts) => [
            ...prevAlerts,
            "New quote from " + message.quote.name,
          ]);
          return [message.quote, ...prevQuotes];
        });
      } else if (
        Array.isArray(message) &&
        message.length > 0 &&
        message[0].type === "quote"
      ) {
        console.log("Message identified as an array of quotes:", message);
        setQuotes((prevQuotes) => {
          const newQuotes = message.filter(
            (quote) => !prevQuotes.some((q) => q.id === quote.id)
          );
          if (newQuotes.length > 0) {
            setAlerts((prevAlerts) => [
              ...prevAlerts,
              ...newQuotes.map((quote) => "New quote from " + quote.name),
            ]);
          }
          return [...newQuotes, ...prevQuotes];
        });
      } else if (message.message === "Quote deleted successfully") {
        console.log("Quote deleted successfully, quoteId:", message.quoteId);
        setQuotes((prevQuotes) => {
          return prevQuotes.filter((quote) => quote.id !== message.quoteId);
        });
      } else if (message.message === "New message retrieved") {
        console.log("New message received:", message.messageData);
        setMessages((prevMessages) => {
          const messageExists = prevMessages.some(
            (msg) => msg.messageId === message.messageData.messageId
          );
          if (messageExists) {
            return prevMessages;
          }
          return [message.messageData, ...prevMessages];
        });
      } else if (Array.isArray(message) && message[0]?.type === "message") {
        console.log("Message identified as an array of messages:", message);
        setMessages((prevMessages) => {
          const newMessages = message.filter(
            (msg) => !prevMessages.some((m) => m.messageId === msg.messageId)
          );
          return [...newMessages, ...prevMessages];
        });
      } else {
        console.error("Received non-quote message or error:", message);
      }
    };

    ws.current.onclose = () => {
      console.log("WebSocket Closed");
      reconnectWebSocket();
    };
  };

  const reconnectWebSocket = () => {
    if (!reconnectInterval.current) {
      reconnectInterval.current = setInterval(() => {
        console.log("Attempting to reconnect WebSocket...");
        connectWebSocket();
      }, 5000);
    }
  };

  useEffect(() => {
    if (ws.current) {
      console.log("Cleaning up existing WebSocket connection on mount");
      ws.current.close();
    }

    connectWebSocket();

    return () => {
      if (ws.current) {
        console.log("Closing WebSocket on unmount");
        ws.current.close();
        ws.current = null;
      }
      clearInterval(reconnectInterval.current);
    };
  }, []);

  const handleAlertClick = (index) => {
    setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index));
  };

  return (
    <WebSocketContext.Provider
      value={{
        ws: ws.current,
        quotes,
        setQuotes,
        messages,
        setMessages,
        alerts,
        handleAlertClick,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};
