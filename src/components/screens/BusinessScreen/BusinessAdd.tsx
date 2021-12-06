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
import BusinessForm from "./BusinessForm";
import Business from "../../../classes/Business";
import EditIcon from "@mui/icons-material/Edit";
import Api from "../../../api/Api";
import { useCurrentUser } from "../../../hooks/currentUser";
import { useAlert } from "../../ui/Alert/useAlert";

const TAG = "CUSTOMENR CARD";
type BusinessAddProps = {
  onSave?: (res: boolean) => void;
  onClose?: () => void;
  originalBusiness?: Business | null;
};
const BusinessAdd: React.FC<BusinessAddProps> = ({
  onSave = () => null,
  onClose = () => null,
  originalBusiness = null,
}) => {
  const [currentBusiness, setCurrentBusiness] = useState(new Business(null));
  const me = useCurrentUser();
  const alert = useAlert();

  useEffect(() => {
    if (originalBusiness) setCurrentBusiness(originalBusiness);
  }, [originalBusiness]);

  useEffect(() => {
    if (!currentBusiness.isEmpty) {
      Api.database.business.saveBusiness(me, currentBusiness).then(() => {
        console.log("Business saved");
        alert({
          title: "Institucion Creada",
          enabled: true,
          okButton: "Ok",
        });
      });
      onSave(true);
    }
  }, [currentBusiness, onSave, me, alert]);
  return (
    <div className="BusinessAdd">
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: (t) => t.palette.primary.light,
              }}
              aria-label="recipe"
            >
              {!currentBusiness.isEmpty ? <EditIcon /> : "+"}
            </Avatar>
          }
          action={
            <IconButton aria-label="close" onClick={(e) => onClose()}>
              <CloseIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6">
              {!currentBusiness.isEmpty ? "Editar empresa" : "Nueva empresa"}
            </Typography>
          }
          subheader={
            !currentBusiness.isEmpty
              ? `(${currentBusiness.id}) ${currentBusiness.name}`
              : `Fecha: ${utils.dates.dateNowString()}`
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Llena los datos acontinuación.
          </Typography>
          <Divider sx={{ mb: 2, mt: 1 }}></Divider>
          <BusinessForm onChange={(e) => setCurrentBusiness(e)} />
        </CardContent>
      </Card>
    </div>
  );
};
export default BusinessAdd;
