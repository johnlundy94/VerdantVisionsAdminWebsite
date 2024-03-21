import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ServiceAnalyticsCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ServiceAnalyticsCard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Present data on the most requested services. Use this information to
          create visual analytics using Chart.js, perhaps in the form of bar
          charts or pie charts, which will help in making business decisions.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceAnalyticsCard;
