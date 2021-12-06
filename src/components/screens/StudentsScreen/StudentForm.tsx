import React, { useCallback } from "react";
import { Button, CardActions, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

import Student, { StudentInterface } from "../../../classes/Student";

import utils from "../../../libs/utils/utils";

import SearchBar from "../../ui/SearchBar/SearchBar";
import TeacherList from "../../screens/TeacherScreen/TeacherList.json";
import { useAlert } from "../../ui/Alert/useAlert";
import Api from "../../../api/Api";
import { useCurrentBusiness } from "../../../hooks/currentBusiness";

const TAG = "Student FORM";
type StudentFormProps = {
  currentStudent?: Student;
  isNewStudent?: boolean;
  student?: Student;
  onChange: (c: Student) => void;
};
const StudentForm: React.FC<StudentFormProps> = ({
  onChange,
  isNewStudent = false,
  student,
}) => {
  console.log(TAG, "render");
  const alert = useAlert();
  const cBusiness = useCurrentBusiness();
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data: StudentInterface = {
        id: "NN",
        name: formData.get("given-name") + "",
        lastName: formData.get("last-name") + "",
        code: formData.get("code") + "",
        grade: formData.get("grade") + "",
        group: formData.get("group") + "",
        // router: formData.get("router") + "",
        idCard: formData.get("idCard") + "",
        email: formData.get("email") + "",
        //Me gustaria también poner aqui "clases activas" como una cadena de palabras, se complica mucho?
        creationDate: utils.dates.dateNowUnix(),
        activeClasses: "",
      };
      const newStudent = new Student(data);
      onChange(newStudent);
    },
    [onChange]
  );
  const newT = TeacherList.map((item) => {
    return {
      id: item.idCard + "",
      name: item.name,
      lastName: item.lastname,
    };
  });
  const handleRemove = useCallback(() => {
    const remove = () => {
      if (student) {
        Api.database.student
          .removeStudent(student, cBusiness)
          .then((res) => {
            alert({
              title: "Estudiante eliminado",
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
      body: `Seguro que quieres eliminar a el estudiante ${student?.name}?`,
      enabled: true,
      okButton: "Si",
      noButton: "Cancelar",
      onClose: (res) => res && remove(),
    });
  }, [alert, student, cBusiness]);
  return (
    <div className="StudentForm">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {/* {!isNewStudent && (
          <SearchBar
            list={newT}
            onChange={(res) => {
              console.log(res);
            }}
          />
        )} */}

        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nombre"
          name="given-name"
          autoComplete="none"
          placeholder="Nombre"
          defaultValue={student?.name || ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastname"
          label="Apellidos"
          name="last-name"
          placeholder="Apellidos"
          defaultValue={student?.lastName || ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="code"
          label="Código"
          autoComplete="code"
          name="Código Ej: 200099"
          defaultValue={student?.code || ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="grade"
          label="Grado"
          name="grade"
          placeholder="Grado Ej: 1ro"
          defaultValue={student?.grade || ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="group"
          label="Grupo"
          name="group"
          placeholder="Grupo Ej: A"
          defaultValue={student?.group || ""}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="idCard"
          label="Documento de identidad"
          name="idCard"
          placeholder="Tarjeta de identidad"
          defaultValue={student?.idCard || ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo electrónico"
          name="email"
          placeholder="Correo electrónico"
          defaultValue={student?.email || ""}
        />
        {/* es esto importante? router--> */}
        {/* <CSelect
          label="Router"
          name="router"
          items={[
            { key: "Pepe", value: "PEPE1" },
            { key: "Pepeaa", value: "PEPE2" },
          ]}
        /> */}
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
            {!student?.isEmpty && (
              <Grid xs={6} item display="flex" flexDirection="row-reverse">
                <Button
                  onClick={handleRemove}
                  sx={{ mt: 2 }}
                  color="error"
                  variant="outlined"
                >
                  Eliminar estudiante
                </Button>
              </Grid>
            )}
          </Grid>
        </CardActions>
      </Box>
    </div>
  );
};
export default StudentForm;
