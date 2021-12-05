import { createTheme } from "@mui/material";
import { blue, green, purple } from "@mui/material/colors";
const tp: any = {
  typography: {
    fontFamily: "Noto Sans, Raleway, Arial",
    button: {
      fontFamily: "Raleway, Arial",
    },
  },
};
const ThemeConfig = createTheme({
  ...tp,
  palette: {
    primary: {
      main: "#00bbd3", //purple[500],
      light: "#62eeff",
      dark: "#008ba2",
      darkPlus: "#006070",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ed407a",
      light: "#ff77a9",
      dark: "#b5004e",
      darkPlus: "#760033",
      contrastText: "#000000",
    },
  },
});
export default ThemeConfig;
