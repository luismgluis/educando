import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import utils from "../../../libs/utils/utils";

const TAG = "TEACHER CARD";
type TeacherRemoveProps = {
  onSave?: any;
};
const TeacherRemove: React.FC<TeacherRemoveProps> = ({ onSave }) => {
  console.log(TAG, "render");
  return (
    <div className="TeacherRemove">
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Nuevo cliente"
          subheader={utils.dates.dateNowString()}
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button>Guardar</Button>
          <Button>Cancelar</Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default TeacherRemove;
