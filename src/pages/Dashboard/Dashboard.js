import QuoteManageCard from "../../components/DashboardComponents/QuoteManageCard";
import CustomerDataCard from "../../components/DashboardComponents/CustomerDataCard";
import AlertsCard from "../../components/DashboardComponents/AlertsCard";
import FeedbackCard from "../../components/DashboardComponents/FeedbackCard";
import FinancialOverviewCard from "../../components/DashboardComponents/FinancialOverviewCard";
import ProjectProgressCard from "../../components/DashboardComponents/ProjectProgressCard";
import ResourceManageCard from "../../components/DashboardComponents/ResourceManageCard";
import ScheduleCard from "../../components/DashboardComponents/ScheduleCard";
import ServiceAnalyticsCard from "../../components/DashboardComponents/ServiceAnalyticsCard";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="quote-manage-card-container">
        <QuoteManageCard />
      </div>
      <div className="customer-data-card-container">
        <CustomerDataCard />
      </div>
      <div className="alerts-card-container">
        <AlertsCard />
      </div>
      <div className="feedback-card-container">
        <FeedbackCard />
      </div>
      <div className="financial-overview-card-container">
        <FinancialOverviewCard />
      </div>
      <div className="project-progress-card-container">
        <ProjectProgressCard />
      </div>
      <div className="resource-manage-card-container">
        <ResourceManageCard />
      </div>
      <div className="schedule-card-container">
        <ScheduleCard />
      </div>
      <div className="service-analytics-card-container">
        <ServiceAnalyticsCard />
      </div>
    </div>
  );
}

export default Dashboard;
