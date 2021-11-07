import "./NavBar.scss";
import React, { useCallback, useMemo } from "react";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Hidden,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useMobile from "../../hooks/useMobile";

const TAG = "NAV BAR";
type NavBarProps = {
  onOpenMenu?: () => void;
  menuOpened: boolean;
};

const MyThemeSpacingDiv = styled("div")(({ theme }) => ({
  minHeight: theme.mixins.toolbar.minHeight,
  marginBottom: "1rem",
}));

const NavBar: React.FC<NavBarProps> = ({ onOpenMenu, menuOpened }) => {
  console.log(TAG, "render");

  const isMobile = useMobile();
  const isDesktop = useMobile("desktop");
  const theme = useTheme();

  const contrastColorPrimary = useMemo(() => {
    return theme.palette.getContrastText(theme.palette.primary.main);
  }, [theme]);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, position: "fixed", width: "100%", bottom: 0 }}>
        {isMobile && (
          <BottomNavigation
            showLabels
            // value={value}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            sx={{ bgcolor: "primary.main" }}
          >
            <BottomNavigationAction
              onClick={onOpenMenu}
              icon={
                <MenuIcon fontSize="large" htmlColor={contrastColorPrimary} />
              }
            />
            <Button fullWidth variant="contained" disableElevation>
              Hola
            </Button>
            <BottomNavigationAction
              label={
                <Typography variant="caption" color="HighlightText">
                  Hola
                </Typography>
              }
              icon={<LocationOnIcon htmlColor={contrastColorPrimary} />}
            />
          </BottomNavigation>
        )}
        {!isMobile && (
          <AppBar
            className="CustomAppBar"
            position="fixed"
            sx={{
              width: `calc(100% - ${menuOpened || isDesktop ? 200 : 0}px)`,
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: isDesktop ? "none" : undefined }}
                onClick={() => {
                  if (onOpenMenu) onOpenMenu();
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        )}
      </Box>
      {!isMobile && <MyThemeSpacingDiv />}
    </React.Fragment>
  );
};
export default NavBar;
