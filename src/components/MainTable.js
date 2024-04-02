import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function MainTable({
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
  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
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
