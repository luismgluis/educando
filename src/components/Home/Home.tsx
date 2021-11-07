import "./Home.scss";
import React, { useState } from "react";
import { Delete } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import NavBarDrawer from "../NavBar/NavBarDrawer";
import useMobile from "../../hooks/useMobile";
const TAG = "HOME";
type HomeProps = {
  prop1?: any;
};
const Home: React.FC<HomeProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const isDesktop = useMobile("desktop");

  return (
    <Box sx={{}} className="Home">
      <NavBar
        onOpenMenu={() => setVisibleDrawer(!visibleDrawer)}
        menuOpened={visibleDrawer}
      />
      <NavBarDrawer
        open={visibleDrawer}
        onClose={() => setVisibleDrawer(false)}
      />

      <Box
        sx={{
          width: `calc(100% - ${isDesktop ? 200 : 0}px)`,
          marginLeft: isDesktop ? "200px" : undefined,
        }}
      >
        <Button variant="contained" color="primary">
          Hola Mundo!
        </Button>
        <Button color="secondary" variant="contained" disableElevation>
          disableElevation
        </Button>
        <Delete color="primary" fontSize="large" />

        <Button variant="contained" color="primary" startIcon={<Delete />}>
          Eliminar
        </Button>

        <IconButton aria-label="delete" color="primary">
          <Delete />
        </IconButton>
        <Typography variant="h3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          consequatur enim? Optio qui minima veritatis dolore laboriosam cumque
          perferendis dolores aliquam omnis totam? Iure consectetur eveniet
          quidem esse ex est!
        </Typography>
      </Box>
    </Box>
  );
};
export default Home;
