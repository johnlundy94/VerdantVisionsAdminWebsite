import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RowActionsMenu from "./RowActionsMenu";

export default function QuoteManageTable({
  id,
  name,
  email,
  phone,
  address,
  services,
  budget,
  description,
}) {
  const changeCamelCase = (camelCase) => {
    return camelCase
      .replace(/([A-Z])/g, " $1")
      .trim()
      .replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
  };

  const renderServices = (services) => {
    return Object.entries(services)
      .filter(([service, selected]) => selected)
      .map(([service]) => changeCamelCase(service))
      .join(". ");
  };

  const handleEmail = () => {
    // Logic to email the customer
  };

  const handleDelete = () => {
    // Logic to delete the quote request
  };

  const handleAccept = () => {
    // Logic to accept the quote
  };

  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="right">
        <RowActionsMenu
          onEmail={handleEmail}
          onDelete={handleDelete}
          onAccept={handleAccept}
        />
      </TableCell>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{address}</TableCell>
      <TableCell>{renderServices(services)}</TableCell>
      <TableCell>{budget}</TableCell>
      <TableCell>{description}</TableCell>
    </TableRow>
  );
}
