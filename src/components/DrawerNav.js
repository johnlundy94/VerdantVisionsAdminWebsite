import "./DrawerNav.css";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
// ... import other icons

const drawerWidth = 240;

function DrawerNav() {
  const pages = [
    "Home",
    "Quotes",
    "Completed Projects",
    "Customer Communication",
    "Quick Stats",
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        color="#B03737"
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>
        </Toolbar>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {pages.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {/* Replace with appropriate icons */}
                  {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Content here */}
      </Box>
    </Box>
  );
}

export default DrawerNav;

{
  /*
<h2>Recent Activities</h2>
<h2>New Quote Requests</h2>
<h2>Completed Projects</h2>
<h2>Customer Inquiries</h2>
<h2>Pending Actions</h2>
<h2>Quotes Awaiting Approval</h2>
<h2>Unanswered Customer Emails</h2>
<h2>Quick Stats</h2> */
}
