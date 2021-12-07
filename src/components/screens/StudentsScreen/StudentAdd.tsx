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
import StudentForm from "./StudentForm";
import Student from "../../../classes/Student";
import EditIcon from "@mui/icons-material/Edit";
import Api from "../../../api/Api";
import { useCurrentUser } from "../../../hooks/currentUser";
import { useCurrentBusiness } from "../../../hooks/currentBusiness";
import { useAlert } from "../../ui/Alert/useAlert";

const TAG = "STUDENT CARD";
type StudentAddProps = {
  onSave?: (res: boolean) => void;
  onClose?: () => void;
  originalStudent?: Student | null;
};
const StudentAdd: React.FC<StudentAddProps> = ({
  onSave = () => null,
  onClose = () => null,
  originalStudent = null,
}) => {
  const [currentStudent, setCurrentStudent] = useState(new Student(null));

  const me = useCurrentUser();
  const cBusiness = useCurrentBusiness();
  const alert = useAlert();

  useEffect(() => {
    if (originalStudent) setCurrentStudent(originalStudent);
  }, [originalStudent]);

  const saveStudent = useCallback(
    (student: Student) => {
      if (
        (!student.isEmpty && originalStudent === null) ||
        originalStudent?.isEmpty
      ) {
        Api.database.student.saveStudent(me, cBusiness, student).then(() => {
          console.log("Student saved");
          onSave(true);
          alert({
            title: "Estudiante creado",
            body: "Ya puedes asignarlo a alguna clase",
            okButton: "Ok",
            enabled: true,
          });
        });
        return;
      }
      if (!student.isEmpty && !originalStudent?.isEmpty) {
        student.id = originalStudent?.id!;
        Api.database.student.modifyStudent(student, cBusiness).then(() => {
          console.log("Student saved");
          onSave(true);
          alert({
            title: "Estudiante Modificado",
            body: "Los cambios fueron realizados satisfactoriamente.",
            okButton: "Ok",
            enabled: true,
          });
        });
      }
    },
    [me, cBusiness, onSave, alert, originalStudent]
  );

  return (
    <div className="StudentAdd">
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: !currentStudent.isEmpty ? blue[400] : green[500],
              }}
              aria-label="recipe"
            >
              {!currentStudent.isEmpty ? <EditIcon /> : "+"}
            </Avatar>
          }
          action={
            <IconButton aria-label="close" onClick={(e) => onClose()}>
              <CloseIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6">
              {!currentStudent.isEmpty
                ? "Editar estudiante"
                : "Nuevo estudiante"}
            </Typography>
          }
          subheader=
          {`Fecha: ${utils.dates.dateNowString()}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Llena los datos a continuación.
          </Typography>
          <Divider sx={{ mb: 2, mt: 1 }}></Divider>
          <StudentForm
            isNewStudent={originalStudent === null}
            student={originalStudent || new Student(null)}
            onChange={(e) => saveStudent(e)}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default StudentAdd;
