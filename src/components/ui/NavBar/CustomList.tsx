// import "./CustomList.scss";
import React, { useCallback, useEffect, useState } from "react";
import { Divider, Menu, MenuItem } from "@mui/material";

import { Box } from "@mui/system";
import { useCurrentUser } from "../../../hooks/currentUser";
import useMobile from "../../../hooks/useMobile";

type CustomListProps = {
  isVisible: boolean;
  onClose: () => void;
};
const CustomList: React.FC<CustomListProps> = ({
  isVisible = false,
  onClose,
}) => {
  const me = useCurrentUser();
  const [open, setOpen] = useState(false);
  const isMobile = useMobile();

  const handleClose = useCallback(() => {
    console.log("err");
    // setOpen(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);

  return (
    <Menu
      id="menu-appbar"
      // anchorEl={currentElement}
      anchorOrigin={{
        vertical: isMobile ? "bottom" : "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
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
