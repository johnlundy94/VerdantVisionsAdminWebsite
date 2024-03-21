import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ProjectProgressCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ProjectProgressCard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Track and update the status of ongoing projects. Include quick views
          on timelines, assigned workers, and any pending actions.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectProgressCard;
