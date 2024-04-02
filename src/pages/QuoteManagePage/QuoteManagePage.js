import "./QuoteManagePage.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuotes } from "../../store/quotesSlice";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import QuoteManageTable from "../../components/QuoteManageTable";

function QuoteManagePage() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <div className="quote-manage-page-container">
      <h1>Quote Management</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
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
            {quotes.map((quote) => (
              <QuoteManageTable
                key={quote.id}
                name={quote.name}
                email={quote.email}
                phone={quote.phone}
                address={quote.address}
                services={quote.services}
                budget={quote.budget}
                description={quote.description}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default QuoteManagePage;
