import React, { useCallback } from "react";
import {
  Button,
  CardActions,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";

import ClassRoom, { ClassRoomInterface } from "../../../classes/ClassRoom";
import utils from "../../../libs/utils/utils";
import DeleteIcon from "@mui/icons-material/Delete";

//estaba tratando de mover el ícono pero no supe como
// function PositionedTooltips() {
//   return (
//     <Box sx={{ width: 500 }}>
//       <Grid container justifyContent="center">
//         <Grid item>
//           <Tooltip title="Add" placement="bottom-start">
//             <Button>bottom-start</Button>
//           </Tooltip>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

//

const TAG = "Class FORM";
type ClassFormProps = {
  currentClass?: ClassRoom;
  onChange: (c: ClassRoom) => void;
};
const ClassForm: React.FC<ClassFormProps> = ({ onChange }) => {
  console.log(TAG, "render");
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data: ClassRoomInterface = {
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
      const newClass = new ClassRoom(data);
      onChange(newClass);
    },
    [onChange]
  );
  return (
    <div className="ClassForm">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }}>
        <TextField
          size="small"
          margin="none"
          required
          fullWidth
          id="username"
          label="Nombre"
          name="given-name"
          autoComplete="none"
          placeholder="Nombre"
        />
        <TextField
          size="small"
          margin="none"
          required
          fullWidth
          id="lastname"
          label="Apellidos"
          name="last-name"
          placeholder="Apellidos"
        />
        <TextField
          size="small"
          margin="none"
          required
          fullWidth
          id="code"
          label="Código"
          autoComplete="code"
          name="Código"
        />
        <TextField
          size="small"
          margin="none"
          required
          fullWidth
          id="grade"
          label="Grado"
          name="grade"
          placeholder="Grado"
        />
        <TextField
          size="small"
          margin="none"
          required
          fullWidth
          id="group"
          label="Grupo"
          name="group"
          placeholder="Grupo"
        />

        <TextField
          size="small"
          margin="none"
          required
          fullWidth
          id="idCard"
          label="Tarjeta de identidad"
          name="idCard"
          placeholder="Tarjeta de identidad"
        />
        <TextField
          size="small"
          margin="none"
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
          {/* <Button
            type="submit"
            sx={{ mt: 2 }}
            color="primary"
            variant="contained"
          > */}

          <Tooltip title="Borrar" arrow>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {/* </Button> */}
        </CardActions>
        {/* {PositionedTooltips} */}
      </Box>
    </div>
  );
};

export default ClassForm;
