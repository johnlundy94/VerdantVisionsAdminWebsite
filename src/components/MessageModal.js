import React, { useState, useEffect } from "react";
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

const MessageModal = ({ open, onClose, quote }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (quote) {
      fetchEmails(quote.email).then((fetchedMessages) =>
        setMessages(fetchedMessages)
      );
    }
  }, [quote]);

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
              message: newMessage,
              email: quote.email,
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setMessages([...messages, message]);
          setNewMessage("");
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Messages with {quote.name}</DialogTitle>
      <DialogContent>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={message.text}
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
