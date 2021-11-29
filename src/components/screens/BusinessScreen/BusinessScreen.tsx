import "./BusinessScreen.scss";
import React from "react";
const TAG = "BusinessScreen";
type BusinessScreenProps = {
  prop1?: any;
};
const BusinessScreen: React.FC<BusinessScreenProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return <div className="BusinessScreen">BusinessScreen</div>;
};
export default BusinessScreen;
