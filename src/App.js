import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./muiTheme";
import QuoteManagePage from "./pages/QuoteManagePage/QuoteManagePage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <QuoteManagePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
