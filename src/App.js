import React from "react";
import "./App.css";
import { ThemeProvider, AppBar, Toolbar, Typography } from "@mui/material";
import muiTheme from "./muiTheme";
import QuoteManagePage from "./pages/QuoteManagePage/QuoteManagePage";
import LawnMower from "@mui/icons-material/Agriculture";

function App() {
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
      </ThemeProvider>
    </div>
  );
}

export default App;
