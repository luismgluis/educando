// import "./BusinessScreen.scss";
// import React from "react";
// const TAG = "BusinessScreen";
// type BusinessScreenProps = {
//   prop1?: any;
// };
// const BusinessScreen: React.FC<BusinessScreenProps> = ({ prop1 }) => {
//   console.log(TAG, "render");
//   return <div className="BusinessScreen">BusinessScreen</div>;
// };
// export default BusinessScreen;

import "./BusinessScreen.scss";
import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Business from "../../../classes/Business";
import BusinessCard from "./BusinessCard";
import Api from "../../../api/Api";
import { useCurrentUser } from "../../../hooks/currentUser";
const TAG = "BusinessScreen";
type BusinessScreenProps = {};
const BusinessScreen: React.FC<BusinessScreenProps> = ({}) => {
  console.log(TAG, "render");
  const onSelect = useCallback((business: Business) => {}, []);
  const me = useCurrentUser();
  const [businesArr, setBusinesArr] = useState<Business[]>([]);

  useEffect(() => {
    Api.database.user
      .getUserBusiness(me.id)
      .then((arr) => {
        setBusinesArr(arr);
      })
      .catch((err) => {
        setBusinesArr([]);
      });
    return () => {};
  }, [me]);
  return (
    <div className="BusinessScreen">
      <Grid container spacing={2} padding={2}>
        {businesArr.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={`GridBusiness${index}`}>
            <BusinessCard onSelect={onSelect} business={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default BusinessScreen;