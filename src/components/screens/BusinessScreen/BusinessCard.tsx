import React, { useCallback } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Grid,
  Tooltip,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Business from "../../../classes/Business";
import { AccountBalance, Delete, Remove } from "@mui/icons-material";
import utils from "../../../libs/utils/utils";
import { useAlert } from "../../ui/Alert/useAlert";

const TAG = "BUSINESS CARD";
type BusinessCardProps = {
  business: Business;
  onSelect: (b: Business) => void;
  onRemove: (b: Business) => void;
};
const BusinessCard: React.FC<BusinessCardProps> = ({
  onSelect,
  business,
  onRemove,
}) => {
  const alert = useAlert();
  const checkRemove = useCallback(
    (busi: Business) => {
      alert.info({
        title: "Seguro quieres eliminar?",
        body: "Esta accion no se puede deshacer.",
        enabled: true,
        type: "question",
        okButton: "Si, eliminalo",
        noButton: "Cancelar",
        onClose: (res) => {
          res && onRemove(busi);
        },
      });
    },
    [onRemove, alert]
  );
  return (
    <div className="BusinessCard">
      <Card sx={{ maxWidth: 580 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {business.name.substr(0, 1)}
            </Avatar>
          }
          action={
            <Tooltip title="Borrar" arrow>
              <IconButton
                aria-label="settings"
                onClick={() => checkRemove(business)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          }
          title={business.name}
          subheader={utils.dates.unixToString(business.creationDate)}
        />
        <CardMedia
          component="img"
          height="194"
          image={business.urlImg || "https://picsum.photos/200/300"}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {business.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container>
            <Grid item>
              <Button
                onClick={() => onSelect(business)}
                variant={"contained"}
                startIcon={<AccountBalance />}
              >
                Seleccionar
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
};
export default BusinessCard;
