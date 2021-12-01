import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import Customer from "../../../classes/Customer";
const TAG = "CUSTOMER SELECTED";
type CustomerSelectedProps = {
  currentCustomer: Customer;
  setCurrentCustomer: (c: Customer) => void;
  onEdit: (c: Customer) => void;
};
const CustomerSelected: React.FC<CustomerSelectedProps> = ({
  currentCustomer,
  setCurrentCustomer,
  onEdit,
}) => {
  console.log(TAG, "render");
  return (
    <Card sx={{ my: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {currentCustomer.name.substr(0, 1)}
          </Avatar>
        }
        action={
          <Box>
            <IconButton
              aria-label="close"
              onClick={(e) => setCurrentCustomer(new Customer(null))}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              onClick={(e) => onEdit(currentCustomer)}
            >
              <EditIcon />
            </IconButton>
          </Box>
        }
        title={
          <Typography variant="h6">
            {currentCustomer.name + " " + currentCustomer.lastName}
          </Typography>
        }
        subheader="Usuario seleccionado"
      />
    </Card>
  );
};
export default CustomerSelected;
