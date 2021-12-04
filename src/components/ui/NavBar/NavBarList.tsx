import React, { useCallback } from "react";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Divider,
  Box,
} from "@mui/material";
//import SendIcon from "@mui/icons-material/Send";

//import DraftsIcon from "@mui/icons-material/Drafts";
import useMobile from "../../../hooks/useMobile";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useSetHomeGoTo } from "../../../hooks/useHomeGoTo";
import { HomeCurrentScreen } from "../../HomeCurrentScreen";
import AppIcon from "../../icons/AppIcon";

const TAG = "NAVBAR LIST";

const MyThemeSpacingDiv = styled("div")(({ theme }) => ({
  minHeight: theme.mixins.toolbar.minHeight,
  marginBottom: "1rem",
}));

type NavBarListProps = {
  onSelect?: () => void;
};

const NavBarList: React.FC<NavBarListProps> = ({ onSelect }) => {
  console.log(TAG, "render");

  const isMobile = useMobile();
  const setHomeGoTo = useSetHomeGoTo();
  const customGoto = useCallback(
    (screen: HomeCurrentScreen) => {
      setHomeGoTo(screen);
      if (onSelect) onSelect();
    },
    [setHomeGoTo, onSelect]
  );
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: isMobile ? undefined : 360,
        minWidth: isMobile ? undefined : 200,
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div>
          <MyThemeSpacingDiv>
            <Box
              sx={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
                margin: "10px 0px 0px 10px",
              }}
            >
              <AppIcon width={80} />
            </Box>
          </MyThemeSpacingDiv>
          <Divider />
        </div>
      }
    >
      <ListSubheader component="div" id="nested-list-subheader">
        Herramientas
      </ListSubheader>

      <ListItemButton onClick={() => customGoto("UsersScreen")}>
        <ListItemIcon>
          <PersonSearchIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItemButton>

      <ListItemButton onClick={() => customGoto("TeachersScreen")}>
        <ListItemIcon>
          <PersonSearchIcon />
        </ListItemIcon>
        <ListItemText primary="Docentes" />
      </ListItemButton>

      <ListItemButton onClick={() => customGoto("BusinessScreen")}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Empresas" />
      </ListItemButton>

      <ListItemButton onClick={() => customGoto("RoutersScreen")}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Routers" />
      </ListItemButton>

      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
};
export default NavBarList;
