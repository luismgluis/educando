import "./NavBar.scss";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  makeStyles,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const TAG = "NAV BAR";
type NavBarProps = {
  prop1?: any;
};

const MyThemeSpacingDiv = styled("div")(({ theme }) => ({
  minHeight: theme.mixins.toolbar.minHeight,
  marginBottom: "1rem",
}));

const NavBar: React.FC<NavBarProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
export default NavBar;
