import { Box, Button, TextField, Typography } from "@mui/material";
//import Ejemplo from "../Ejemplo/Ejemplo"
import useMobile from "../../hooks/useMobile";
function StudentProfile () {
  //const studentProfile = () => {
    const isDesktop = useMobile("desktop");
    
  return (
    <Box
        sx={{
          width: `calc(100% - ${isDesktop ? 200 : 0}px)`,
          marginLeft: isDesktop ? "100px" : undefined,
        }}
      >
      
        <Typography variant="h3" textAlign="center">
          Perfil de [nombre del estudiante]
        </Typography >
        <br/>
        <Box sx={{ textAlign: 'center' }}>
        <div>
        <Typography variant="body1" textAlign="center">
          Nombre: [editado por profesor]
        </Typography>
        <TextField
          id="outlined-read-only-input"
          label=""
          defaultValue="Diana Sofía Castillo León"
          InputProps={{
            readOnly: true,
          }}
          />
          </div>
          </Box>

        <br/>
        <Typography variant="body1">
          Código: [editado por profesor]
        </Typography>
        <TextField
          id="outlined-read-only-input"
          label=""
          type="number"
          defaultValue="13"
          InputProps={{
            readOnly: true,
          }}
          />
          <br/>
          <br/>
        <Typography variant="body1">
          Grado: [editado por profesor]
        </Typography>
        <TextField
          id="outlined-read-only-input"
          label=""
          defaultValue="4A"
          InputProps={{
            readOnly: true,
          }}
          />
          <br/>
        <br/>
        <Typography variant="body1">
          Clases activas: [array de clases]
        </Typography>
        <TextField
          id="outlined-read-only-input"
          label=""
          defaultValue="Español - Inglés - Arte - Cocina"
          InputProps={{
            readOnly: true,
          }}
          />
          <br/>
        <br/>
        <Button variant="contained" color="primary">
          Tablero
        </Button>
    
        
        </Box>
  );
  
}
export default StudentProfile;