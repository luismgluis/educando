import React, { useCallback } from "react";
import { Button, CardActions, TextField } from "@mui/material";
import { Box } from "@mui/system";

import Class, { ClassInterface } from "../../../classes/Class";
import utils from "../../../libs/utils/utils";

const TAG = "Class FORM";
type ClassFormProps = {
  currentClass?: Class;
  onChange: (c: Class) => void;
};
const ClassForm: React.FC<ClassFormProps> = ({ onChange }) => {
  console.log(TAG, "render");
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data: ClassInterface = {
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
        activeClasses: ""
      };
      const newClass = new Class(data);
      onChange(newClass);
    },
    [onChange]
  );
  return (
    <div className="ClassForm">
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
          name="Código"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="grade"
          label="Grado"
          name="grade"
          placeholder="Grado"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="group"
          label="Grupo"
          name="group"
          placeholder="Grupo"
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
export default ClassForm;
