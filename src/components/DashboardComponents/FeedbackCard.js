import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function FeedbackCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          FeedbackCard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Incorporate a section where customer feedback on completed projects
          can be reviewed. This could help in maintaining service quality.
        </Typography>
        <Button href="/feedback">Feedback Page</Button>
      </CardContent>
    </Card>
  );
}

export default FeedbackCard;
