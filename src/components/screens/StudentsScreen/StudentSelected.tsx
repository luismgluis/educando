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

import Student from "../../../classes/Student";
const TAG = "STUDENT SELECTED";
type StudentSelectedProps = {
  currentStudent: Student;
  setCurrentStudent: (c: Student) => void;
  onEdit: (c: Student) => void;
};
const StudentSelected: React.FC<StudentSelectedProps> = ({
  currentStudent,
  setCurrentStudent,
  onEdit,
}) => {
  console.log(TAG, "render");
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {currentStudent.name.substr(0, 1)}
          </Avatar>
        }
        action={
          <Box>
            <IconButton
              aria-label="close"
              onClick={(e) => setCurrentStudent(new Student(null))}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              onClick={(e) => onEdit(currentStudent)}
            >
              <EditIcon />
            </IconButton>
          </Box>
        }
        title={
          <Typography variant="h6">
            {currentStudent.name + " " + currentStudent.lastName}
          </Typography>
        }
        subheader="Estudiante seleccionado"
      />
    </Card>
  );
};
export default StudentSelected;
