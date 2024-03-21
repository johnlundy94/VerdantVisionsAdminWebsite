import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function QuoteManageCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quote Management
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Display the latest quote requests from customers. Include the ability
          to sort by date, service type, or budget size. You could also add
          functionality for admins to update the status of a quote, such as
          "pending," "in progress," or "completed."
        </Typography>
        <Button href="/quote-manage">Quote Management Page</Button>
      </CardContent>
    </Card>
  );
}

export default QuoteManageCard;
