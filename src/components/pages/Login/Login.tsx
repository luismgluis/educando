import "./Login.scss";
import React from "react";
import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage.png";
import { Container, Grid, Box } from "@mui/material";
import BackgroundWaves from "../../ui/BackgroundWaves/BackgroundWaves";
import LoginCreate from "./LoginCreate";

// import { useLocation } from "react-router-dom";

const TAG = "LOGIN";
type LoginProps = {
  enableCreate?: boolean;
};

const Login: React.FC<LoginProps> = ({ enableCreate }) => {
  // const location = useLocation();
  // console.log(location);

  return (
    <div className="Login">
      <Container
        maxWidth="sm"
        sx={{
          marginY: 5,
        }}
      >
        <Grid
          container
          sx={{
            borderRadius: 5,
            boxShadow: 3,
            overflow: "hidden",
            bgcolor: "grey.A100",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              className="loginLeft"
              sx={{ bgcolor: (t) => t.palette.primary.main }}
            >
              <div className="imageContainer">
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/nuestra-tribu.appspot.com/o/banners%2FEducados.svg?alt=media&token=367b620b-9bd8-4172-9103-823bc4590d06"
                  }
                  alt="login router"
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {!enableCreate && <LoginForm />}
            {enableCreate && <LoginCreate />}
          </Grid>
        </Grid>
      </Container>
      <BackgroundWaves />
    </div>
  );
};
export default Login;
