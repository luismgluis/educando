import React, { useCallback, useEffect, useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import NavBarList from "./NavBarList";
import useMobile from "../../../hooks/useMobile";
const TAG = "NAVBAR DRAWER";
type NavBarDrawerProps = {
  open?: boolean;
  onClose?: () => void;
};
const NavBarDrawer: React.FC<NavBarDrawerProps> = ({ open, onClose }) => {
  console.log(TAG, "render");
  const [visible, setVisible] = useState(false);

  const toggleDrawer = useCallback(
    (show: boolean) => {
      setVisible(show);
      if (onClose && !show) onClose();
    },
    [onClose]
  );

  const isMobile = useMobile();
  const isDesktop = useMobile("desktop");
  const isTablet = useMobile("tablet");

  useEffect(() => {
    // open when props send (button press)
    if ((isMobile || isTablet) && open) setVisible(true);
  }, [isMobile, open, isTablet]);

  useEffect(() => {
    // if is desktop always is open
    if (isTablet) return;
    if (isDesktop) toggleDrawer(true);
  }, [isDesktop, isTablet, toggleDrawer]);

  useEffect(() => {
    // if is not desktop set invisible
    if (!isDesktop) setVisible(false);
  }, [isDesktop, setVisible]);

  console.log(TAG, "isMobile", isMobile, "isdesktop", isDesktop);
  const drawerWidth = "20%";
  return (
    <SwipeableDrawer
      anchor={isDesktop || isTablet ? "left" : "bottom"}
      variant={isDesktop ? "persistent" : "temporary"}
      sx={{
        width: isDesktop ? drawerWidth : undefined,

        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: isDesktop ? drawerWidth : undefined,
          boxSizing: "border-box",
          bgcolor: (t) => t.palette.primary.dark,
        },
      }}
      open={visible}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
      swipeAreaWidth={20}
    >
      <NavBarList onSelect={() => toggleDrawer(false)} />
    </SwipeableDrawer>
  );
};
export default NavBarDrawer;
