import "./Home.scss";
import React from "react";
import { Delete } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import NavBarDrawer from "../NavBar/NavBarDrawer";
const TAG = "HOME";
type HomeProps = {
  prop1?: any;
};
const Home: React.FC<HomeProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return (
    <div className="Home">
      <NavBar />
      <NavBarDrawer />

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
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        consequatur enim? Optio qui minima veritatis dolore laboriosam cumque
        perferendis dolores aliquam omnis totam? Iure consectetur eveniet quidem
        esse ex est!
      </Typography>
    </div>
  );
};
export default Home;
