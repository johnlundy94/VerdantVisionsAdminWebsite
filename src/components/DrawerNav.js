import React from "react";
import {
  useTheme,
  useMediaQuery,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function DrawerNav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const pages = [
    "Home",
    "Quotes",
    "Completed Projects",
    "Customer Communication",
    "Quick Stats",
  ];

  const [value, setValue] = React.useState(0);

  const drawer = (
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

  const bottomNav = (
    <BottomNavigation
      showLabels
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        "& .Mui-selected": {
          // Ensure selected state is visible if not already
          color: "primary.main",
        },
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      {pages.map((page, index) => (
        <BottomNavigationAction key={page} label={page} icon={<MailIcon />} />
      ))}
    </BottomNavigation>
  );

  return isMobile ? bottomNav : drawer;
}

export default DrawerNav;
