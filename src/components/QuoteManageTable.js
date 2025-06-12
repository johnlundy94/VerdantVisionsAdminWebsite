import {
  TableCell,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RowActionsMenu from "./RowActionsMenu";
import React from "react";

export default function QuoteManageTable({ quotes, onDelete }) {
  const [open, setOpen] = React.useState(false);
  const [selectedDescription, setSelectedDescription] = React.useState("");

  const handleOpen = (description) => {
    setSelectedDescription(description);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedDescription("");
  };

  return (
    <>
      {quotes.map((quote) => (
        <TableRow
          key={quote.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="right">
            <RowActionsMenu quote={quote} onDelete={onDelete} />
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
              .map((serviceName) =>
                serviceName
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())
              )
              .join(", ")}
          </TableCell>
          <TableCell>{quote.budget}</TableCell>
          <TableCell>
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleOpen(quote.description)}
            >
              View description
            </Button>
          </TableCell>
        </TableRow>
      ))}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="description-dialog-title"
      >
        <DialogTitle id="description-dialog-title">
          Quote Description
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText component="div" style={{ whiteSpace: "pre-wrap" }}>
            {selectedDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
