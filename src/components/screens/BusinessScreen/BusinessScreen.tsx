import "./BusinessScreen.scss";
import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Business from "../../../classes/Business";
import BusinessCard from "./BusinessCard";
import Api from "../../../api/Api";
import { useCurrentUser } from "../../../hooks/currentUser";
import MoreIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import {
  useCurrentBusiness,
  useSetCurrentBusiness,
} from "../../../hooks/currentBusiness";
import CModal from "../../ui/CModal/CModal";
import BusinessAdd from "./BusinessAdd";
import Loader from "../../ui/Loader/Loader";

const TAG = "BusinessScreen";
type BusinessScreenProps = {};

const AddNewBusinessButton = (props: any) => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} md={4} key={`GridBusiness00`}>
      <CardActionArea onClick={props.onClick}>
        <Card
          className="AddNewBusiness"
          sx={(t) => ({ bgcolor: t.palette.secondary.light, width: "100%" })}
        >
          <MoreIcon sx={{ fontSize: 80, color: "secondary.darkPlus" }} />
          <Box position="absolute" bottom={0} p={2}>
            <Typography sx={{ color: "secondary.darkPlus" }}>
              Unirse o crear
            </Typography>
          </Box>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

const BusinessScreen: React.FC<BusinessScreenProps> = ({}) => {
  console.log(TAG, "render");

  const me = useCurrentUser();
  const [businesArr, setBusinesArr] = useState<Business[]>([]);
  const [state, setState] = useState(0);
  const cBusiness = useCurrentBusiness();
  const setCurrentBusiness = useSetCurrentBusiness();

  const onSelect = useCallback(
    (business: Business) => {
      setCurrentBusiness(business);
    },
    [setCurrentBusiness]
  );
  const onRemove = useCallback(
    (business: Business) => {
      Api.database.business
        .removeBusiness(me, business)
        .then((res) => {
          console.log("REMOVE");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [me]
  );
  useEffect(() => {
    const unsubs = Api.database.user.getUserBusinessListener(me.id, (arr) => {
      setState(1);
      setBusinesArr(arr);
    });
    return () => unsubs();
  }, [me]);
  const [addUserEnable, setAddUserEnable] = useState(false);
  return (
    <div className="BusinessScreen">
      <CModal open={addUserEnable} onClose={() => setAddUserEnable(false)}>
        <BusinessAdd
          onClose={() => setAddUserEnable(false)}
          onSave={() => setAddUserEnable(false)}
        />
      </CModal>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          {cBusiness.isEmpty ? "Bienvenid@" : `${cBusiness.name}`}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          {cBusiness.isEmpty
            ? "Primero escoge una institución"
            : `Esta es la intitucion seleccionada`}
        </Typography>
        <Typography variant="body1">
          {cBusiness.description ? cBusiness.description : ""}
          {businesArr.length === 0
            ? "Parece que no tienes intituciones asociadas, intenta creando una nueva."
            : ""}
        </Typography>
      </Container>
      <Grid container spacing={2} padding={2}>
        <AddNewBusinessButton
          onClick={() => setAddUserEnable(!addUserEnable)}
        />
        {state < 1 && <Loader />}
        {businesArr.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={`GridBusiness${index}`}>
            <BusinessCard
              onSelect={onSelect}
              business={item}
              onRemove={onRemove}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default BusinessScreen;
