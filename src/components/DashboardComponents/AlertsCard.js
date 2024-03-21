import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function AlertsCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AlertsCard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Have a notification system that alerts the admin about new quotes,
          customer inquiries, or action items that need attention.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlertsCard;
