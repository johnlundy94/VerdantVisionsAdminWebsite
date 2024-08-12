// muiTheme.js
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  breakpoints: {
    values: {
      sm: 1127,
    },
  },
  palette: {
    primary: {
      main: "#A7BC5B",
      light: "#FFFFFF",
      dark: "#8da242",
      contrastText: "#fbfbfb",
    },
    text: {
      primary: "#262626",
      secondary: "#434343",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          color: "#FFFFFF",
          backgroundColor: "#A7BC5B",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          "&.Mui-selected .MuiBottomNavigationAction-label": {
            color: "#FFFFFF",
          },
          backgroundColor: "#A7BC5B",
        },
      },
      defaultProps: {
        showLabels: true,
      },
    },
  },
});

export default muiTheme;
