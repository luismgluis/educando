import React, { useCallback } from "react";
import { Button, CardActions, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

import Teacher, { TeacherInterface } from "../../../classes/Teacher";
import utils from "../../../libs/utils/utils";
import Api from "../../../api/Api";
import { useCurrentBusiness } from "../../../hooks/currentBusiness";
import { useAlert } from "../../ui/Alert/useAlert";

const TAG = "TEACHER FORM";
type TeacherFormProps = {
  currentTeacher?: Teacher;
  isNewTeacher?: boolean;
  teacher?: Teacher;
  onChange: (c: Teacher) => void;
};
const TeacherForm: React.FC<TeacherFormProps> = ({
  onChange,
  isNewTeacher = false,
  teacher,
}) => {
  console.log(TAG, "render");
  const alert = useAlert();
  const cBusiness = useCurrentBusiness();
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data: TeacherInterface = {
        id: "NN",
        name: formData.get("given-name") + "",
        lastName: formData.get("last-name") + "",
        subject: formData.get("subject") + "",
        email: formData.get("email") + "",
        idCard: formData.get("idCard") + "",
        creationDate: utils.dates.dateNowUnix(),
      };
      const newTeacher = new Teacher(data);
      onChange(newTeacher);
    },
    [onChange]
  );
  // const newT = TeacherList.map((item) => {
  //   return {
  //     id: item.idCard + "",
  //     name: item.name,
  //     lastName: item.lastname,
  //   };
  // });
  const handleRemove = useCallback(() => {
    const remove = () => {
      if (teacher) {
        Api.database.teacher
          .removeTeacher(teacher, cBusiness)
          .then((res) => {
            alert({
              title: "Profesor eliminado",
              enabled: true,
              okButton: "Ok",
            });
          })
          .catch((err) =>
            alert({
              title: "Eliminacion fallida",
              body: "Intentalo de nuevo",
              enabled: true,
              okButton: "Ok",
            })
          );
      }
    };
    alert({
      title: "¿Eliminar?",
      body: `Seguro que quieres eliminar a el profesor ${teacher?.name}?`,
      enabled: true,
      okButton: "Si",
      noButton: "Cancelar",
      onClose: (res) => res && remove(),
    });
  }, [alert, teacher, cBusiness]);

  
  return (
    <div className="TeacherForm">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nombre"
          name="given-name"
          autoComplete="none"
          placeholder="Nombre"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastname"
          label="Apellido"
          name="last-name"
          placeholder="Apellido"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="subject"
          label="Asignatura"
          autoComplete="subject"
          name="subject"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          autoComplete="email"
          name="email"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="idCard"
          label="Cédula"
          name="idCard"
          placeholder="Cédula"
        />

<CardActions disableSpacing>
          <Grid container>
            <Grid xs={6} item>
              <Button
                type="submit"
                sx={{ mt: 2 }}
                color="primary"
                variant="contained"
              >
                Guardar
              </Button>
            </Grid>
            {!teacher?.isEmpty && (
              <Grid xs={6} item display="flex" flexDirection="row-reverse">
                <Button
                  onClick={handleRemove}
                  sx={{ mt: 2 }}
                  color="error"
                  variant="outlined"
                >
                  Eliminar profesor
                </Button>
              </Grid>
            )}
          </Grid>
        </CardActions>
      </Box>
    </div>
  );
};
export default TeacherForm;


