import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import utils from "../../../libs/utils/utils";
import ClassForm from "./ClassForm";
import Class from "../../../classes/Class";
import EditIcon from "@mui/icons-material/Edit";

type ClassAddProps = {
  onSave?: (res: boolean) => void;
  onClose?: () => void;
  originalClass?: Class | null;
};
const ClassAdd: React.FC<ClassAddProps> = ({
  onSave = () => null,
  onClose = () => null,
  originalClass = null,
}) => {
  const [currentClass, setCurrentClass] = useState(new Class(null));

  useEffect(() => {
    if (originalClass) setCurrentClass(originalClass);
  }, [originalClass]);

  return (
    <div className="ClassAdd">
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: !currentClass.isEmpty ? blue[400] : green[500],
              }}
              aria-label="recipe"
            >
              {!currentClass.isEmpty ? <EditIcon /> : "+"}
            </Avatar>
          }
          action={
            <IconButton aria-label="close" onClick={(e) => onClose()}>
              <CloseIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6">
              {!currentClass.isEmpty ? "Editar estudiante" : "Nuevo estudiante"}
            </Typography>
          }
          subheader={
            !currentClass.isEmpty
              ? `(${currentClass.id}) ${currentClass.name}`
              : `Fecha: ${utils.dates.dateNowString()}`
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Llena los datos acontinuación.
          </Typography>
          <Divider sx={{ mb: 2, mt: 1 }}></Divider>
          <ClassForm onChange={(e) => setCurrentClass(e)} />
        </CardContent>
        {/* <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mr: 3,
            }}
            disabled={currentClass.isEmpty}
            onClick={(e) => onSave(true)}
          >
            Guardar
          </Button>
          <Button color="error" onClick={(e) => onSave(false)}>
            Cancelar
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
};
export default ClassAdd;
