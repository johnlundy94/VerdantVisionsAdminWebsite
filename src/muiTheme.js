import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
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
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: "red",
          color: "white",
          fontSize: "0.75rem",
        },
      },
    },
  },
});

export default muiTheme;
