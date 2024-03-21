import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ResourceManageCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ResourceManageCard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Track resources like materials, supplies, and equipment. This might be
          more backend-heavy but useful for inventory management.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ResourceManageCard;
