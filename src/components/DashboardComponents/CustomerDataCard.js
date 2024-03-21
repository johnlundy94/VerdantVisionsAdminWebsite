import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CustomerDataCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Customer Data
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Keep a searchable and sortable list of customers, with details from
          the quote form and an overview of their projects. Implement CRUD
          operations for managing this data.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomerDataCard;
