import React, { useState, useContext, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageModal from "./MessageModal";
import Badge from "@mui/material/Badge";
import { WebSocketContext } from "../WebSocketContext";

const RowActionsMenu = ({ onDelete, quote }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { messages } = useContext(WebSocketContext);
  const [newMessageCount, setNewMessageCount] = useState(0);

  const open = Boolean(anchorEl);

  const extractEmail = (emailString) => {
    const match = emailString.match(/<(.*)>/);
    return match ? match[1] : emailString.trim();
  };

  useEffect(() => {
    if (messages && quote) {
      const normalizedQuoteEmail = extractEmail(quote.email);
      const newMessages = messages.filter(
        (msg) =>
          extractEmail(msg.email) === normalizedQuoteEmail &&
          msg.direction === "inbound"
      );
      console.log("Filtered new Messages for this quote: ", newMessages);
      setNewMessageCount(newMessages.length);
    }
  }, [messages, quote]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenMessageModal = () => {
    setIsMessageModalOpen(true);
    setNewMessageCount(0);
    handleClose();
  };

  const handleCloseMessageModal = () => {
    setIsMessageModalOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge color="error" badgeContent={newMessageCount} max={99}>
          <MoreVertIcon />
        </Badge>
      </IconButton>
      <Menu
        id="row-actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleOpenMessageModal}>Messages</MenuItem>
        <MenuItem
          onClick={() => {
            console.log(
              "Delete clicked for quoteId:",
              quote.id,
              "createdAt:",
              quote.CreatedAt
            );
            onDelete(quote.id, quote.CreatedAt);
            handleClose();
          }}
        >
          Delete Quote
        </MenuItem>
      </Menu>
      <MessageModal
        open={isMessageModalOpen}
        onClose={handleCloseMessageModal}
        quote={quote}
      />
    </>
  );
};

export default RowActionsMenu;
