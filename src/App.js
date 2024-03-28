import "./App.css";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import muiTheme from "./muiTheme";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard/Dashboard";
import AlertsPage from "./pages/AlertsPage/AlertsPage";
import CustomerDataPage from "./pages/CustomerDataPage/CustomerDataPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import FinancialOverviewPage from "./pages/FinancialOverviewPage/FinancialOverviewPage";
import ProjectProgressPage from "./pages/ProjectProgressPage/ProjectProgressPage";
import QuoteManagePage from "./pages/QuoteManagePage/QuoteManagePage";
import ResourceManagePage from "./pages/ResourceManagePage/ResourceManagePage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import ServiceAnalyticsPage from "./pages/ServiceAnalyticsPage/ServiceAnalyticsPage";

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
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/customer-data" element={<CustomerDataPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route
              path="/financial-overview"
              element={<FinancialOverviewPage />}
            />
            <Route path="/project-progress" element={<ProjectProgressPage />} />
            <Route path="/quote-manage" element={<QuoteManagePage />} />
            <Route path="/resource-manage" element={<ResourceManagePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route
              path="/service-analytics"
              element={<ServiceAnalyticsPage />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
