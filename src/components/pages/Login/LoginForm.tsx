import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  Divider,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleButton from "react-google-button";
import Api from "../../../api/Api";

import { useLocation } from "react-router-dom";
import { useGoto } from "../../../hooks/useGoTo";
import { useCurrentUser } from "../../../hooks/currentUser";
import { useAlert } from "../../ui/Alert/useAlert";

const TAG = "LOGIN FORM";
type LoginFormProps = {
  prop1?: any;
};
const LoginForm: React.FC<LoginFormProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const { state } = useLocation();
  const goTo = useGoto();
  const alert = useAlert();

  const [loginError, setLoginError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const data = {
      email: "" + dataForm.get("email"),
      password: "" + dataForm.get("password"),
    };
    if (data.email.length < 5 || data.password.length < 5) {
      setLoginError("Datos ingresados invalidos");
      return;
    }
    Api.app
      .loginWithEmail(data.email, data.password)
      .then((res) => {
        setLoginError("");
        goTo.home();
      })
      .catch((err) => {
        setLoginError("Login fallido");
      });
  };
  const [enableGoogle, setEnableGoogle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEnableGoogle(false);
    }, 800);
  }, []);

  const me = useCurrentUser();
  const started = useRef(false);
  useEffect(() => {
    if (started.current === true) {
      return;
    }
    if (me.isNull) {
      return;
    }
    if (!me.isEmpty) {
      goTo.home();
    }
    setTimeout(() => {
      started.current = true;
    }, 1500);
  }, [me, goTo]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingY: 8,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>

        <Box sx={{ paddingY: 2 }}>
          {loginError && (
            <Alert variant="outlined" severity="error" sx={{ my: 4 }}>
              El login fallo intenta de nuevo.
            </Alert>
          )}

          <GoogleButton
            label="Ingresar con Google"
            disabled={enableGoogle}
            onClick={() => {
              setLoginError("");
              Api.app
                .loginWithGoogle()
                .then((res) => {
                  console.log("s");
                  goTo.home();
                })
                .catch((err) => {
                  setLoginError("Login con google fallido");
                });
            }}
          />
        </Box>

        <Divider variant="middle" sx={{ height: 15, width: "100%" }}>
          <Typography variant="caption" color="gray">
            ó tambien
          </Typography>
        </Divider>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={state?.user || undefined}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={state?.password || undefined}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          <Grid container spacing={2}>
            <Grid item xs>
              <Link
                onClick={() =>
                  alert.info({
                    enabled: true,
                    title: "Aun no podemos ayudarte con eso",
                  })
                }
                variant="body2"
              >
                Olvide mi contraseña
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={goTo.loginCreate} variant="body2">
                {"Aun no tengo una cuenta"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default LoginForm;
