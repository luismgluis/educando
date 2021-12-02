import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import useMobile from "../../../hooks/useMobile";

function TeacherProfile() {
  const isDesktop = useMobile("desktop");

  return (
    <Box
      sx={{
        width: `calc(100% - ${isDesktop ? 200 : 0}px)`,
        marginLeft: isDesktop ? "100px" : undefined,
      }}
    >
      <Typography variant="h3" textAlign="center">
        Perfil de [nombre del profesor]
      </Typography>
      <br />
      <Box sx={{ textAlign: "center" }}>
      
          
      
          <Typography variant="body1" textAlign="center">
            Nombre(s): 
          </Typography>
          <TextField
            id="outlined-read-only-input"
            label=""
            defaultValue="Federico"
            InputProps={{
              readOnly: true,
            }}
          />
          
          <Typography variant="body1" textAlign="center">
            Apellido(s): 
          </Typography>
          <TextField
            id="outlined-read-only-input"
            label=""
            defaultValue="García"
            InputProps={{
              readOnly: true,
            }}
          />
        
      
      <br />
      <Typography variant="body1">Teléfono:</Typography>
      <TextField
        id="outlined-read-only-input"
        label=""
        type="text"
        defaultValue="301263489"
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
        defaultValue="profesorfedericogl@gmail.com"
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
        defaultValue="3A - 3B - 4A  - 4B"
        InputProps={{
          readOnly: true,
        }}
      />
      <br />
      <br />
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" >
          3A
        </Button>
        <Button variant="contained" color="primary">
          3B
        </Button>
        <Button variant="contained" color="primary">
          4A
        </Button>
        <Button variant="contained" color="primary">
          4B
        </Button>
      </Stack>

      </Box>

    </Box>
  );
}
export default TeacherProfile;
