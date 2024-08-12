// MessageModal.js
import React, { useState, useEffect, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { WebSocketContext } from "../WebSocketContext";
import "./MessageModal.css"; // Import the custom CSS file

const fetchEmails = async (email) => {
  try {
    const response = await fetch(
      `https://1nqujh1bi2.execute-api.us-east-2.amazonaws.com/dev/messages/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const emails = await response.json();
      return emails;
    } else {
      console.error("Failed to fetch emails");
      return [];
    }
  } catch (error) {
    console.error("Error fetching emails:", error);
    return [];
  }
};

const cleanMessageContent = (content) => {
  // Remove quoted email text and clientId tags
  const mainContent = content.split(
    /On [a-zA-Z]{3}, [a-zA-Z]{3} \d{1,2}, \d{4} at \d{1,2}:\d{2}/
  )[0];
  const cleanedContent = mainContent
    .replace(/<!-- ClientId: [\w-]+ -->/g, "")
    .trim();
  return cleanedContent;
};

const MessageModal = ({ open, onClose, quote }) => {
  const { messages } = useContext(WebSocketContext);
  const [localMessages, setLocalMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (quote) {
      fetchEmails(quote.email).then((fetchedMessages) =>
        setLocalMessages(
          fetchedMessages.map((msg) => ({
            ...msg,
            message: cleanMessageContent(msg.message || msg.text),
          }))
        )
      );
    }
  }, [quote]);

  useEffect(() => {
    if (quote) {
      const relevantMessages = messages
        .filter(
          (msg) => msg.email.includes(quote.email) // updated to match the email format
        )
        .map((msg) => ({
          ...msg,
          message: cleanMessageContent(msg.message),
        }));

      setLocalMessages((prevMessages) => [
        ...relevantMessages.filter(
          (msg) =>
            !prevMessages.some((prevMsg) => prevMsg.messageId === msg.messageId)
        ),
        ...prevMessages,
      ]);
    }
  }, [messages, quote]);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      const message = {
        quoteId: quote.id,
        email: quote.email,
        text: newMessage,
        timestamp: new Date(),
      };

      try {
        const response = await fetch(
          "https://1nqujh1bi2.execute-api.us-east-2.amazonaws.com/dev/messages",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              clientId: quote.id,
              message: `${newMessage}\n\n<!-- ClientId: ${quote.id} -->`,
              email: quote.email,
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setLocalMessages((prevMessages) => [
            ...prevMessages,
            {
              ...message,
              message: cleanMessageContent(newMessage),
            },
          ]);
          setNewMessage("");
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const sortedMessages = [...localMessages].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Messages with {quote.name}</DialogTitle>
      <DialogContent>
        <List>
          {sortedMessages.map((message, index) => (
            <ListItem
              key={index}
              className={
                message.email.includes(
                  "admin@verdantvisionslandscapingadmin.com"
                )
                  ? "admin-message"
                  : "client-message"
              }
            >
              <ListItemText
                primary={message.message || message.text}
                secondary={new Date(message.timestamp).toLocaleString()}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <TextField
          fullWidth
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <Button onClick={handleSendMessage} color="primary">
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageModal;
