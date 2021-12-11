import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import utils from "../../../libs/utils/utils";
import CustomerForm from "./CustomerForm";
import Customer from "../../../classes/Customer";
import EditIcon from "@mui/icons-material/Edit";

const TAG = "CUSTOMENR CARD";
type CustomerAddProps = {
  onSave?: (res: boolean) => void;
  onClose?: () => void;
  originalCustomer?: Customer | null;
};
const CustomerAdd: React.FC<CustomerAddProps> = ({
  onSave = () => null,
  onClose = () => null,
  originalCustomer = null,
}) => {
  const [currentCustomer, setCurrentCustomer] = useState(new Customer(null));

  useEffect(() => {
    if (originalCustomer) setCurrentCustomer(originalCustomer);
  }, [originalCustomer]);

  return (
    <div className="CustomerAdd">
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: !currentCustomer.isEmpty ? blue[400] : green[500],
              }}
              aria-label="recipe"
            >
              {!currentCustomer.isEmpty ? <EditIcon /> : "+"}
            </Avatar>
          }
          action={
            <IconButton aria-label="close" onClick={(e) => onClose()}>
              <CloseIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6">
              {!currentCustomer.isEmpty ? "Editar cliente" : "Nuevo cliente"}
            </Typography>
          }
          subheader={
            !currentCustomer.isEmpty
              ? `(${currentCustomer.id}) ${currentCustomer.name}`
              : `Fecha: ${utils.dates.dateNowString()}`
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Llena los datos a continuación.
          </Typography>
          <Divider sx={{ mb: 2, mt: 1 }}></Divider>
          <CustomerForm onChange={(e) => setCurrentCustomer(e)} />
        </CardContent>
        {/* <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mr: 3,
            }}
            disabled={currentCustomer.isEmpty}
            onClick={(e) => onSave(true)}
          >
            Guardar
          </Button>
          <Button color="error" onClick={(e) => onSave(false)}>
            Cancelar
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
};
export default CustomerAdd;
