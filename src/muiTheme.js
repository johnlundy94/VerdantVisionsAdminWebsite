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
      primary: "#FFFFFF",
      secondary: "#fbfbfb",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#A7BC5B",
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

// Tetradic color combination for: #A7BC5B
// #5BBCA1
// #705BBC
// #BC5B77
