import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageModal from "./MessageModal";

const RowActionsMenu = ({ onDelete, quote }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenMessageModal = () => {
    setIsMessageModalOpen(true);
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
        <MoreVertIcon />
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
