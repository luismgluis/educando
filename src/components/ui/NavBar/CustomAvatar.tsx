// import "./CustomAvatar.scss";
import React, { useMemo, useState } from "react";
import { Stack, Avatar, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import CustomList from "./CustomList";
import { useCurrentUser } from "../../../hooks/currentUser";

const TAG = "CUSTOM AVATAR";
type CustomAvatarProps = {
  prop1?: any;
};
const CustomAvatar: React.FC<CustomAvatarProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const [menuVisible, setMenuVisible] = useState(false);

  const me = useCurrentUser();
  const initials = useMemo(() => {
    let text = "";
    if (me.name.length > 0 && text.length < 2) text += me.name.substr(0, 1);

    return text;
  }, [me]);
  console.log(menuVisible);
  return (
    <Stack direction="row" spacing={2}>
      <div
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            {initials}
          </Avatar>
        </IconButton>

        <CustomList
          isVisible={menuVisible}
          onClose={() => {
            setMenuVisible(!menuVisible);
          }}
        />
      </div>
    </Stack>
  );
};
export default CustomAvatar;
