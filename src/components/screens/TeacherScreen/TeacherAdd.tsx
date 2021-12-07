import React, { useCallback, useEffect, useState } from "react";
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
import { useCurrentUser } from "../../../hooks/currentUser";
import { useCurrentBusiness } from "../../../hooks/currentBusiness";
import { useAlert } from "../../ui/Alert/useAlert";
import Api from "../../../api/Api";

const TAG = "TEACHER CARD";
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

  const me = useCurrentUser();
  const cBusiness = useCurrentBusiness();
  const alert = useAlert();
  
  useEffect(() => {
    if (originalTeacher) setCurrentTeacher(originalTeacher);
  }, [originalTeacher]);

  const saveTeacher = useCallback(
    (teacher: Teacher) => {
      if (
        (!teacher.isEmpty && originalTeacher === null) ||
        originalTeacher?.isEmpty
      ) {
        Api.database.teacher.saveTeacher(me, cBusiness, teacher).then(() => {
          console.log("Teacher saved");
          onSave(true);
          alert({
            title: "Profesor creado",
            body: "Ya puedes asignarlo a alguna clase",
            okButton: "Ok",
            enabled: true,
          });
        });
        return;
      }
      if (!teacher.isEmpty && !originalTeacher?.isEmpty) {
        teacher.id = originalTeacher?.id!;
        Api.database.teacher.modifyTeacher(teacher, cBusiness).then(() => {
          console.log("Teacher saved");
          onSave(true);
          alert({
            title: "Profesor modificado",
            body: "Los cambios fueron realizados satisfactoriamente.",
            okButton: "Ok",
            enabled: true,
          });
        });
      }
    },
    [me, cBusiness, onSave, alert, originalTeacher]
  );

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
              {!currentTeacher.isEmpty 
              ? "Editar docente" 
              : "Nuevo docente"}
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
            Llena los datos a continuación.
          </Typography>
          <Divider sx={{ mb: 2, mt: 1 }}></Divider>
          <TeacherForm
            isNewTeacher={originalTeacher === null}
            teacher={originalTeacher || new Teacher(null)}
            onChange={(e) => saveTeacher(e)}
          />
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