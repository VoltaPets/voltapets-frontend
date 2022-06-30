import { createTheme } from "@mui/material";

export const brandTheme = createTheme({
  palette: {
    primary: {
      main: "#2cdeb5",
    },
    secondary: {
      main: "#00a9d8",
    },
    text: {
      primary: "#3e4756",
      secondary: "#a2acbd",
    },
    error: {
      main: "#873e56",
    },
    success: {
      main: "#9bf08d",
    },
    info: {
      main: "#5e8ac2",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h5: {
      color: "#5e8ac2",
      fontSize: 24,
    },
  },
});
