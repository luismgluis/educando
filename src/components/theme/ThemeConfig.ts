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
      main: "#86377b", //purple[500],
    },
    secondary: {
      main: blue[800],
    },
  },
});
export default ThemeConfig;
