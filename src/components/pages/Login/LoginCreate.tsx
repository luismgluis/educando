import "./Login.scss";
import React, { useCallback, useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Container,
  Alert,
} from "@mui/material";

import AccountBoxIcon from "@mui/icons-material/AccountBox";

import InputPassword from "../../ui/InputPassword";
import utils from "../../../libs/utils/utils";
import Loader from "../../ui/Loader/Loader";
import Api from "../../../api/Api";
import { useGoto } from "../../../hooks/useGoTo";

const TAG = "LOGIN";
type LoginProps = {
  prop1?: any;
};

const LoginCreate: React.FC<LoginProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  const goTo = useGoto();
  const [loginError, setLoginError] = useState("");

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = {
        name: formData.get("given-name") + "",
        email: formData.get("email") + "",
        password: formData.get("password") + "",
        newPassword: formData.get("new-password") + "",
      };
      setLoginError("");
      if (data.newPassword !== data.password) {
        setLoginError("Contraseñas no coinciden");
        return;
      }
      if (data.newPassword.length < 7) {
        setLoginError("Contraseña debe tener mas de 8 caracteres");
        return;
      }
      if (!utils.validateEmail(data.email)) {
        setLoginError("Email invalido");
        return;
      }
      if (data.name.length < 5) {
        setLoginError("El nombre no puede tener menos de 6 caracteres");
        return;
      }

      // eslint-disable-next-line no-console
      console.log(data);
      Api.database.user
        .createUserWithEmail(data.name, data.email, data.password)
        .then((res) => {
          goTo.login({ user: data.email, password: data.password });
        })
        .catch((err) => {
          setLoginError("El nombre no puede tener menos de 6 caracteres");
        });
    },
    [goTo]
  );
  const [formEnable, setFormEnable] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFormEnable(true);
    }, 800);
  }, []);

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
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear cuenta
        </Typography>

        {loginError.length > 0 && (
          <Alert variant="outlined" severity="error" sx={{ my: 4 }}>
            {loginError}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nombre"
            name="given-name"
            autoComplete="none"
            autoFocus
            helperText="Por favor ingresa tu nombre"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <InputPassword
            placeholder="Contraseña"
            id="password"
            name="password"
            autoComplete="current-password"
          />
          <InputPassword
            placeholder="Contraseña"
            id="password"
            name="new-password"
            autoComplete="current-password"
          />
          <Button
            disabled={!formEnable}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            startIcon={!formEnable ? <Loader p="5px" zoom={0.6} /> : undefined}
          >
            Crear cuenta
          </Button>
          <Button
            disabled={!formEnable}
            size="small"
            color="primary"
            fullWidth
            onClick={() => goTo.loginCreate()}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default LoginCreate;
