import { Badge, Box, Button, TextField, Typography } from "@mui/material";
import Ejemplo from "../Ejemplo/Ejemplo"
import useMobile from "../../hooks/useMobile";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { AccessibilityNew } from "@mui/icons-material";
function Blackboard () {
  //const studentProfile = () => {
    const isDesktop = useMobile("desktop");
    
  return (
    <Box
        sx={{
          width: `calc(100% - ${isDesktop ? 200 : 0}px)`,
          marginLeft: isDesktop ? "100px" : undefined,
        }}
      >
      <Box
        sx={{
          width: `calc(100% - ${isDesktop ? 200 : 0}px)`,
          marginLeft: isDesktop ? "600px" : undefined,
        }}
      >
        <br/>
        <Button variant="outlined" color="primary">Mis datos<AccessibilityNew color="primary"/></Button>
      </Box>
      
        {/* {AccessibilityNew} */}

      
        <Typography variant="h3" textAlign="center">
          Perfil de [nombre del estudiante]
        </Typography >
        <br/>
        <Badge badgeContent={2} color="primary">
          <Button variant="contained" color="success" size="large">
        Clases matriculadas
        </Button>
        </Badge>
        <br/>
        <br/>
        <br/>
        <Badge badgeContent={1} color="primary">
        <Button variant="contained" color="success" size="large">
        Actividades
        </Button>
        </Badge>
        <br/>
        <br/>
        <br/>
        <Badge badgeContent={1} color="primary">
        <Button variant="contained" color="success" size="large">
        Recursos
        </Button>
        </Badge>
        </Box>
        )
      }
        
export default Blackboard;