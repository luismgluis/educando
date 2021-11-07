import React, { useCallback, useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import NavBarList from "./NavBarList";
const TAG = "NAVBAR DRAWER";
type NavBarDrawerProps = {
  anchor?: any;
};
const NavBarDrawer: React.FC<NavBarDrawerProps> = ({ anchor }) => {
  console.log(TAG, "render");
  const [visible, setVisible] = useState(true);

  const toggleDrawer = useCallback((show: boolean) => {
    setVisible(show);
  }, []);

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={visible}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
    >
      <NavBarList />
    </SwipeableDrawer>
  );
};
export default NavBarDrawer;
