import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
        </TableBody>
      </Table>
    </TableContainer>
  );
}
