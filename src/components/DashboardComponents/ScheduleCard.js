import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ScheduleCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ScheduleCard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          If you are planning a worker's app, you might want to integrate a
          scheduling system where you can assign workers to different projects
          and track their availability.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ScheduleCard;
