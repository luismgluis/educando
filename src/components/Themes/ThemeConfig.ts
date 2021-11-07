import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";
const ThemeConfig = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
export default ThemeConfig;
