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
          width: `calc(100% / 12 * 2)`,
          flexShrink: 1,
          [`& .MuiDrawer-paper`]: {
            width: "calc(100% / 12 * 2)",
            boxSizing: "border-box", // Make sure padding and borders are inside the width
            minWidth: "calc(100% / 12 * 2)", // Prevent any smaller width
            maxWidth: "calc(100% / 12 * 2)",
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
                  {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default DrawerNav;
