import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function FinancialOverviewCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          FinancialOverviewCard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Show incoming quotes versus confirmed projects to forecast revenue.
          Include average quote values and conversion rates to help understand
          financial health.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FinancialOverviewCard;
