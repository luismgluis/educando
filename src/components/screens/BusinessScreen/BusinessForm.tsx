import React, { useCallback, useState } from "react";
import { Alert, Button, CardActions, TextField } from "@mui/material";
import { Box } from "@mui/system";

import Business, { BusinessInterface } from "../../../classes/Business";
import utils from "../../../libs/utils/utils";

const TAG = "Business FORM";
type BusinessFormProps = {
  currentBusiness?: Business;
  onChange: (c: Business) => void;
};
const BusinessForm: React.FC<BusinessFormProps> = ({ onChange }) => {
  console.log(TAG, "render");
  const [alert, setAlert] = useState("");
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setAlert("");
      const formData = new FormData(event.currentTarget);
      const data: BusinessInterface = {
        id: "NN",
        name: formData.get("given-name") + "",
        email: formData.get("email") + "",
        description: formData.get("description") + "",
        creationDate: utils.dates.dateNowUnix(),
      };
      const newBusiness = new Business(data);
      if (newBusiness.validate()) {
        onChange(newBusiness);
        return;
      }
      setTimeout(() => {
        setAlert("Datos invalidos");
      }, 200);
    },
    [onChange]
  );
  return (
    <div className="BusinessForm">
      {alert && <Alert severity="error">{alert}</Alert>}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nombre"
          name="given-name"
          autoComplete="none"
          placeholder="Nombre"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          autoComplete="email"
          name="email"
        />
        <TextField
          margin="normal"
          fullWidth
          id="description"
          label="Descripción"
          name="description"
          autoComplete="none"
          placeholder="Descripción"
        />

        <CardActions disableSpacing>
          <Button
            type="submit"
            sx={{ mt: 2 }}
            color="primary"
            variant="contained"
          >
            Guardar
          </Button>
        </CardActions>
      </Box>
    </div>
  );
};
export default BusinessForm;
