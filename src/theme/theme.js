import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0E1937",
    },
    secondary: {
      main: "#0E1937",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          border: "1px solid #0E1937",
          padding: "12px 16px",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: "600",
        },
      },
    },
  },
});

export default theme;
