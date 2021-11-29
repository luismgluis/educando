import "./Login.scss";
import React from "react";
import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage.png";
import { Container, Grid } from "@mui/material";
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
            <div className="loginLeft">
              <div className="imageContainer">
                <img src={LoginImage} alt="login router" />
              </div>
            </div>
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
