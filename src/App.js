import "./App.css";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import muiTheme from "./muiTheme";
import Dashboard from "./pages/Dashboard/Dashboard";
import QuoteManage from "./pages/QuoteManage/QuoteManage";
import CompletedProjects from "./pages/CompletedProjects/CompletedProjects";
import Communication from "./pages/Communication/Communication";
import Nav from "./components/Nav";
import QuickStats from "./pages/QuickStats/QuickStats";

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
            <Route path="/completed" element={<CompletedProjects />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/quick" element={<QuickStats />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
