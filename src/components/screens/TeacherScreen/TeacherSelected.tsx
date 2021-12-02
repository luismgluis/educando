import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import Teacher from "../../../classes/Teacher";
const TAG = "TEACHER SELECTED";
type TeacherSelectedProps = {
  currentTeacher: Teacher;
  setCurrentTeacher: (c: Teacher) => void;
  onEdit: (c: Teacher) => void;
};
const TeacherSelected: React.FC<TeacherSelectedProps> = ({
  currentTeacher,
  setCurrentTeacher,
  onEdit,
}) => {
  console.log(TAG, "render");
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {currentTeacher.name.substr(0, 1)}
          </Avatar>
        }
        action={
          <Box>
            <IconButton
              aria-label="close"
              onClick={(e) => setCurrentTeacher(new Teacher(null))}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              onClick={(e) => onEdit(currentTeacher)}
            >
              <EditIcon />
            </IconButton>
          </Box>
        }
        title={
          <Typography variant="h6">
            {currentTeacher.name + " " + currentTeacher.lastName}
          </Typography>
        }
        subheader="Docente seleccionado"
      />
    </Card>
  );
};
export default TeacherSelected;
