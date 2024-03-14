import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import QuoteManage from "./pages/QuoteManage/QuoteManage";
import Communication from "./pages/Communication/Communication";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/quoteManage" element={<QuoteManage />} />
          <Route path="/communication" element={<Communication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
