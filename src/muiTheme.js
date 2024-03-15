import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
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
  },
});

export default muiTheme;

// Tetradic color combination for: #A7BC5B
// #5BBCA1
// #705BBC
// #BC5B77
