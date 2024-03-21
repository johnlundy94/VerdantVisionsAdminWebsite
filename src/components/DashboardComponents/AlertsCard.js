import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function AlertsCard() {
  return (
    <Card sx={{ width: `calc(100% / 12 * 3)` }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AlertsCard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlertsCard;
