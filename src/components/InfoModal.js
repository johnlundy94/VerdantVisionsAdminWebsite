import React from "react";
import { Modal, Box, Typography, Button, useTheme } from "@mui/material";

const InfoModal = ({ open, handleClose }) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: theme.palette.background.paper,
          boxShadow: 24,
          p: 4,
          color: theme.palette.text.primary, // Apply the primary text color
        }}
      >
        <Typography variant="h6" component="h2">
          Welcome to the Verdant Visions Admin Dashboard
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This site is an SAAS addon to the client-facing site Verdant Visions
          Landscaping. To correctly use this application, you must fill out the
          quote request submission form on the "Quote" page of the client
          website. You must have access to the email used when filling out this
          form. This admin dashboard uses that address in the messaging system
          to facilitate communication between your email (the client email) and
          the admin's messaging system.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Feel free to use the app to check out the live communication. This app
          is a proof of concept for my first dive into SAAS functionality, and
          additional features will be added over time.
        </Typography>
        <Button onClick={handleClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default InfoModal;
