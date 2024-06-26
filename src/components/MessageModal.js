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
import { sendEmail, fetchEmails } from "../mailjet";

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

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const message = {
        quoteId: quote.id,
        email: quote.email,
        text: newMessage,
        timestamp: new Date(),
      };
      sendEmail(quote.email, "New Message from Admin", newMessage).then(() => {
        setMessages([...messages, message]);
        setNewMessage("");
      });
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
                secondary={message.timestamp.toString()}
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
