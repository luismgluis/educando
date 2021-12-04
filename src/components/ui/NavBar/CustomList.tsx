// import "./CustomList.scss";
import React, { useCallback, useEffect, useState } from "react";
import { Divider, Menu, MenuItem } from "@mui/material";

import { Box } from "@mui/system";
import { useCurrentUser } from "../../../hooks/currentUser";
import useMobile from "../../../hooks/useMobile";

type CustomListProps = {
  isVisible: boolean;
  onClose: () => void;
  element: HTMLElement | null;
};
const CustomList: React.FC<CustomListProps> = ({
  isVisible = false,
  onClose,
  element,
}) => {
  const me = useCurrentUser();

  const isMobile = useMobile();

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  console.log("isMobile", isMobile);
  return (
    <Menu
      id="menu-appbarr"
      anchorEl={element}
      // anchorOrigin={{
      //   vertical: "bottom",
      //   horizontal: "right",
      // }}
      // keepMounted
      // transformOrigin={{
      //   vertical: "bottom",
      //   horizontal: "right",
      // }}
      keepMounted={false}
      anchorPosition={{ left: 1, top: 30 }}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      anchorReference="anchorEl"
      transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={isVisible}
      onClose={() => handleClose()}
    >
      <Box marginX={3} py={2}>
        Hola, {me.name}
      </Box>
      <Divider />
      <MenuItem onClick={handleClose}>Editar perfil</MenuItem>
      <MenuItem onClick={handleClose}>Salir</MenuItem>
    </Menu>
  );
};

export default CustomList;
