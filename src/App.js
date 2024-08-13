import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider, AppBar, Toolbar, Typography } from "@mui/material";
import muiTheme from "./muiTheme";
import QuoteManagePage from "./pages/QuoteManagePage/QuoteManagePage";
import LawnMower from "@mui/icons-material/Agriculture";
import InfoModal from "./components/InfoModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setModalOpen(true); // Automatically show the modal when the app loads
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <AppBar position="static" className="header">
          <Toolbar>
            <div className="header-logo">
              <LawnMower sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography variant="h6" className="header-title">
                Admin Dashboard
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <div className="content">
          <QuoteManagePage />
        </div>
        <footer className="footer">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Admin Dashboard
          </Typography>
        </footer>
        <InfoModal open={isModalOpen} handleClose={handleModalClose} />
      </ThemeProvider>
    </div>
  );
}

export default App;
