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

import Class from "../../../classes/Class";
const TAG = "CLASS SELECTED";
type ClassSelectedProps = {
  currentClass: Class;
  setCurrentClass: (c: Class) => void;
  onEdit: (c: Class) => void;
};
const ClassSelected: React.FC<ClassSelectedProps> = ({
  currentClass,
  setCurrentClass,
  onEdit,
}) => {
  console.log(TAG, "render");
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {currentClass.name.substr(0, 1)}
          </Avatar>
        }
        action={
          <Box>
            <IconButton
              aria-label="close"
              onClick={(e) => setCurrentClass(new Class(null))}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              onClick={(e) => onEdit(currentClass)}
            >
              <EditIcon />
            </IconButton>
          </Box>
        }
        title={
          <Typography variant="h6">
            {currentClass.name + " " + currentClass.lastName}
          </Typography>
        }
        header="Danza"
        subheader="Danza - Daniela Vargas Palomino"
    
        
      />
    </Card>
  );
};
export default ClassSelected;
