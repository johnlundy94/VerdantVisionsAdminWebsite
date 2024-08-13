import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#1E1E2F",
      light: "#28293D",
      dark: "#0E0E1A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#434343",
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#A0A0A0",
    },
    background: {
      default: "#121212",
      paper: "#1E1E2F",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          color: "#FFFFFF",
          backgroundColor: "#1E1E2F",
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
          backgroundColor: "#1E1E2F",
        },
      },
      defaultProps: {
        showLabels: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#E0E0E0",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#E0E0E0",
        },
      },
    },
  },
});

export default muiTheme;
