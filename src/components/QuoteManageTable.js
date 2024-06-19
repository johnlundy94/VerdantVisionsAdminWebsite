import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RowActionsMenu from "./RowActionsMenu";

const formatServiceName = (serviceName) => {
  return serviceName.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
};

export default function QuoteManageTable({ quotes, onDelete }) {
  console.log("Rendering QuoteManageTable with quotes: ", quotes);

  return (
    <>
      {quotes.map((quote) => (
        <TableRow
          key={quote.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="right">
            <RowActionsMenu
              quoteId={quote.id}
              createdAt={quote.CreatedAt}
              onDelete={onDelete}
            />
          </TableCell>
          <TableCell component="th" scope="row">
            {quote.name}
          </TableCell>
          <TableCell>{quote.email}</TableCell>
          <TableCell>{quote.phone}</TableCell>
          <TableCell>{quote.address}</TableCell>
          <TableCell>
            {Object.keys(quote.services)
              .filter((key) => quote.services[key])
              .map(formatServiceName)
              .join(", ")}
          </TableCell>
          <TableCell>{quote.budget}</TableCell>
          <TableCell>{quote.description}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
