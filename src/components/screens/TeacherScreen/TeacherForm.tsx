import React, { useCallback } from "react";
import { Button, CardActions, TextField } from "@mui/material";
import { Box } from "@mui/system";

import Teacher, { TeacherInterface } from "../../../classes/Teacher";
import utils from "../../../libs/utils/utils";


const TAG = "TEACHER FORM";
type TeacherFormProps = {
  currentTeacher?: Teacher;
  onChange: (c: Teacher) => void;
};
const TeacherForm: React.FC<TeacherFormProps> = ({ onChange }) => {
  console.log(TAG, "render");
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
export default TeacherForm;
