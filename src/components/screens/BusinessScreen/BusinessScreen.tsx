import "./BusinessScreen.scss";
import React, { useCallback, useEffect, useState } from "react";
import { Card, CardActionArea, Grid, Typography } from "@mui/material";
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

const TAG = "BusinessScreen";
type BusinessScreenProps = {};

const AddNewBusinessButton = (props: any) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={`GridBusiness00`}>
      <CardActionArea onClick={props.onClick}>
        <Card
          className="AddNewBusiness"
          sx={(t) => ({ bgcolor: t.palette.grey["100"], width: "100%" })}
        >
          <MoreIcon color="disabled" sx={{ fontSize: 80 }} />
          <Box position="absolute" bottom={0} p={2}>
            <Typography color="GrayText">Agregar Nuevo</Typography>
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
      <Grid container spacing={2} padding={2}>
        <AddNewBusinessButton
          onClick={() => setAddUserEnable(!addUserEnable)}
        />
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
