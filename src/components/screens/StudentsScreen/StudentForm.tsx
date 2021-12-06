import React, { useCallback } from "react";
import { Button, CardActions, TextField } from "@mui/material";
import { Box } from "@mui/system";

import Student, { StudentInterface } from "../../../classes/Student";

import utils from "../../../libs/utils/utils";

import SearchBar from "../../ui/SearchBar/SearchBar";
import TeacherList from "../../screens/TeacherScreen/TeacherList.json";

const TAG = "Student FORM";
type StudentFormProps = {
  currentStudent?: Student;
  isNewStudent?: boolean;
  onChange: (c: Student) => void;
};
const StudentForm: React.FC<StudentFormProps> = ({
  onChange,
  isNewStudent = false,
}) => {
  console.log(TAG, "render");
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
  return (
    <div className="StudentForm">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {!isNewStudent && (
          <SearchBar
            list={newT}
            onChange={(res) => {
              console.log(res);
            }}
          />
        )}

        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nombre"
          name="given-name"
          autoComplete="none"
          placeholder="Nombre"
          defaultValue=""
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastname"
          label="Apellidos"
          name="last-name"
          placeholder="Apellidos"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="code"
          label="Código"
          autoComplete="code"
          name="Código Ej: 200099"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="grade"
          label="Grado"
          name="grade"
          placeholder="Grado Ej: 1ro"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="group"
          label="Grupo"
          name="group"
          placeholder="Grupo Ej: A"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="idCard"
          label="Tarjeta de identidad"
          name="idCard"
          placeholder="Tarjeta de identidad"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Correo electrónico"
          name="email"
          placeholder="Correo electrónico"
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
          <Button
            type="submit"
            sx={{ mt: 2 }}
            color="primary"
            variant="contained"
          >
            Guardar
          </Button>
        </CardActions>
      </Box>
    </div>
  );
};
export default StudentForm;
