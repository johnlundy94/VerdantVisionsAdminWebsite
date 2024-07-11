import "./QuoteManagePage.css";
import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import QuoteManageTable from "../../components/QuoteManageTable";
import { WebSocketContext } from "../../WebSocketContext";

function QuoteManagePage() {
  const { quotes, setQuotes, ws, messages } = useContext(WebSocketContext);

  const handleDelete = async (quoteId, createdAt) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      console.log(
        "Sending delete request for quoteId:",
        quoteId,
        "createdAt:",
        createdAt
      );
      ws.send(
        JSON.stringify({
          action: "deleteQuote",
          data: { id: quoteId, CreatedAt: createdAt },
        })
      );
    } else {
      console.error("WebSocket is not open");
    }
  };

  return (
    <div className="quote-manage-page-container">
      <h1 className="quote-manage-title">Quote Management</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Options</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Services</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <QuoteManageTable quotes={quotes} onDelete={handleDelete} />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default QuoteManagePage;
