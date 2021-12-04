import React, { useCallback } from "react";
import { Button, CardActions, TextField } from "@mui/material";
import { Box } from "@mui/system";

import Customer, { CustomerInterface } from "../../../classes/Customer";
import CSelect from "../../ui/CSelect/CSelect";
import utils from "../../../libs/utils/utils";

const TAG = "CUSTOMER FORM";
type CustomerFormProps = {
  currentCustomer?: Customer;
  onChange: (c: Customer) => void;
};
const CustomerForm: React.FC<CustomerFormProps> = ({ onChange }) => {
  console.log(TAG, "render");
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data: CustomerInterface = {
        id: "NN",
        name: formData.get("given-name") + "",
        lastName: formData.get("last-name") + "",
        email: formData.get("email") + "",
        ip: formData.get("ip") + "",
        router: formData.get("router") + "",
        idCard: formData.get("idCard") + "",
        creationDate: utils.dates.dateNowUnix(),
      };
      const newCustomer = new Customer(data);
      onChange(newCustomer);
    },
    [onChange]
  );
  return (
    <div className="CustomerForm">
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
          id="lastname"
          label="Apellido"
          name="last-name"
          placeholder="Apellido"
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
        { <TextField
          margin="normal"
          required
          fullWidth
          id="ip"
          label="IP"
          name="ip"
          placeholder="IP"
          helperText="192.168.1.254"
        />}

        <TextField
          margin="normal"
          required
          fullWidth
          id="idCard"
          label="Cedula"
          name="idCard"
          placeholder="Cedula"
        />
        {<CSelect
          label="Router"
          name="router"
          items={[
            { key: "Pepe", value: "PEPE1" },
            { key: "Pepeaa", value: "PEPE2" },
          ]}
        /> }
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
export default CustomerForm;
