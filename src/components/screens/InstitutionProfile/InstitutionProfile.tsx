import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import useMobile from "../../../hooks/useMobile";

function InstitutionProfile() {
  const isDesktop = useMobile("desktop");

  return (
    <Box
      sx={{
        width: `calc(100% - ${isDesktop ? 200 : 0}px)`,
        marginLeft: isDesktop ? "100px" : undefined,
      }}
    >
      <Typography variant="h3" textAlign="center">
        Perfil de [nombre de la institución]
      </Typography>
      <br />
      <Box sx={{ textAlign: "center" }}>
      <Typography variant="body1" textAlign="center">
            Logo institución: 
          </Typography>
          <TextField
            id="outlined-read-only-input"
            label=""
            type="image"
            defaultValue=""
            InputProps={{
              readOnly: true,
            }}
          />
           <br />
           <br />
        <div>
          <Typography variant="body1" textAlign="center">
            Ubicación: 
          </Typography>
          <TextField
            id="outlined-read-only-input"
            label=""
            defaultValue="Carrera 5a # 32-20"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      
      <br />
      <Typography variant="body1">Teléfono:</Typography>
      <TextField
        id="outlined-read-only-input"
        label=""
        type="text"
        defaultValue="(60)3054783"
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <br />
      <Typography variant="body1">Correo electrónico:</Typography>
      <TextField
        id="outlined-read-only-input"
        label=""
        type="email"
        defaultValue="colegiodespertar@gmail.com"
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <br />
      <Typography variant="body1">Clases activas: [array de clases]</Typography>
      <TextField
        id="outlined-read-only-input"
        label=""
        defaultValue="1A - 1B - 2A - 2B  - 3A"
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <br />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" >
          Docentes
        </Button>
        <Button variant="contained" color="primary">
          Estudiantes
        </Button>
        <Button variant="contained" color="primary">
          Clases
        </Button>
      </Stack>

      </Box>

    </Box>
  );
}
export default InstitutionProfile;
