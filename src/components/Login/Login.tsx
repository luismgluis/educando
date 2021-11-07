import React from "react";
import { styled } from "@mui/system";
import { Box, TextField } from "@mui/material";
const TAG = "LOGIN";
type LoginProps = {
  prop1?: any;
};

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

const Login: React.FC<LoginProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return (
    <div className="Login">
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        <ValidationTextField
          label="CSS validation style"
          required
          variant="outlined"
          defaultValue="Success"
          id="validation-outlined-input"
        />
      </Box>
    </div>
  );
};
export default Login;
