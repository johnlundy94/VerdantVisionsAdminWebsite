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
  ListItemButton,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/", type: "link", icon: MailIcon },
  { name: "Quotes", path: "/quoteManage", type: "link", icon: RestoreIcon },
  {
    name: "Completed Projects",
    path: "/completed",
    type: "link",
    icon: RestoreIcon,
  },
  {
    name: "Customer Communication",
    path: "/communication",
    type: "link",
    icon: RestoreIcon,
  },
  {
    name: "Quick Stats",
    path: "/quick",
    type: "link",
    icon: LocationOnIcon,
  },
];

function Nav() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const location = useLocation();
  const currentPath = location.pathname;

  const findCurrentPageIndex = () => {
    return pages.findIndex((p) => p.path === currentPath);
  };

  const [value, setValue] = React.useState(findCurrentPageIndex());

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
            boxSizing: "border-box",
            minWidth: "calc(100% / 12 * 2)",
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
            {pages.map((page, index) => (
              <ListItem key={page.name}>
                <ListItemButton href={page.path}>
                  <ListItemIcon>{React.createElement(page.icon)}</ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );

  const bottomNav = (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          "& .Mui-selected": {
            color: "primary.main",
          },
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // Programmatically navigate to the new page using the history hook
          const newPath = pages[newValue].path;
          navigate(newPath); // This changes the URL to the new path
        }}
      >
        {pages.map((page, index) => (
          <BottomNavigationAction
            key={page.name}
            label={page.name}
            value={index}
            icon={React.createElement(page.icon)}
          />
        ))}
      </BottomNavigation>
    </Box>
  );

  return isMobile ? bottomNav : drawer;
}

export default Nav;
