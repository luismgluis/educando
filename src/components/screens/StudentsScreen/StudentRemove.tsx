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

const TAG = "STUDENT CARD";
type StudentRemoveProps = {
  onSave?: any;
};
const StudentRemove: React.FC<StudentRemoveProps> = ({ onSave }) => {
  console.log(TAG, "render");
  return (
    <div className="StudentRemove">
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
          title="Nuevo estudiante"
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
            Este es el contenido de una tarjeta para un nuevo estudiante.
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
export default StudentRemove;
