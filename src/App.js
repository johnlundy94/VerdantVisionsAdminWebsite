import "./App.css";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import muiTheme from "./muiTheme";
import Dashboard from "./pages/Dashboard/Dashboard";
import QuoteManage from "./pages/QuoteManage/QuoteManage";
import Communication from "./pages/Communication/Communication";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <Router>
          <div className="nav-section">
            <Nav />
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quoteManage" element={<QuoteManage />} />
            <Route path="/communication" element={<Communication />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
