import React from "react";
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
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Business from "../../../classes/Business";
import { Remove } from "@mui/icons-material";
import { useCurrentBusiness } from "../../../hooks/currentBusiness";
import utils from "../../../libs/utils/utils";

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
  console.log(TAG, "render");
  const cBusiness = useCurrentBusiness();

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
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={business.name}
          subheader={utils.dates.unixToString(business.creationDate)}
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {business.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              width: "100%",
            }}
          >
            <Box sx={{ flexGrow: 2 }}>
              <Button
                onClick={() => onSelect(business)}
                variant={
                  cBusiness.id === business.id ? "contained" : "outlined"
                }
                startIcon={<FavoriteIcon />}
              >
                Seleccionar
              </Button>
            </Box>

            <Box
              sx={{
                flexGrow: 2,
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <Button
                onClick={() => onRemove(business)}
                color="error"
                variant={"outlined"}
                startIcon={<Remove />}
              >
                Eliminar
              </Button>
            </Box>
          </Box>
          {/* <IconButton
            aria-label="add to favorites"
            
          >
            <FavoriteIcon />
          </IconButton> */}
        </CardActions>
      </Card>
    </div>
  );
};
export default BusinessCard;
