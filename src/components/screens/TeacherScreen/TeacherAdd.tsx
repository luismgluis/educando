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
import TeacherForm from "./TeacherForm";
import Teacher from "../../../classes/Teacher";
import EditIcon from "@mui/icons-material/Edit";

type TeacherAddProps = {
  onSave?: (res: boolean) => void;
  onClose?: () => void;
  originalTeacher?: Teacher | null;
};
const TeacherAdd: React.FC<TeacherAddProps> = ({
  onSave = () => null,
  onClose = () => null,
  originalTeacher = null,
}) => {
  const [currentTeacher, setCurrentTeacher] = useState(new Teacher(null));

  useEffect(() => {
    if (originalTeacher) setCurrentTeacher(originalTeacher);
  }, [originalTeacher]);

  return (
    <div className="TeacherAdd">
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: !currentTeacher.isEmpty ? blue[400] : green[500],
              }}
              aria-label="recipe"
            >
              {!currentTeacher.isEmpty ? <EditIcon /> : "+"}
            </Avatar>
          }
          action={
            <IconButton aria-label="close" onClick={(e) => onClose()}>
              <CloseIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6">
              {!currentTeacher.isEmpty ? "Editar docente" : "Nuevo docente"}
            </Typography>
          }
          subheader={
            !currentTeacher.isEmpty
              ? `(${currentTeacher.id}) ${currentTeacher.name}`
              : `Fecha: ${utils.dates.dateNowString()}`
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Llena los datos acontinuación.
          </Typography>
          <Divider sx={{ mb: 2, mt: 1 }}></Divider>
          <TeacherForm onChange={(e) => setCurrentTeacher(e)} />
        </CardContent>
        {/* <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mr: 3,
            }}
            disabled={currentTeacher.isEmpty}
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
export default TeacherAdd;
