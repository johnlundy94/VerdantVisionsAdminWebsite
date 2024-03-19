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
import HomeIcon from "@mui/icons-material/Home";
import CheckIcon from "@mui/icons-material/Check";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/", type: "link", icon: HomeIcon },
  { name: "Quotes", path: "/quoteManage", type: "link", icon: FormatQuoteIcon },
  {
    name: "Completed Projects",
    path: "/completed",
    type: "link",
    icon: CheckIcon,
  },
  {
    name: "Customer Communication",
    path: "/communication",
    type: "link",
    icon: ChatBubbleIcon,
  },
  {
    name: "Quick Stats",
    path: "/quick",
    type: "link",
    icon: QueryStatsIcon,
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
