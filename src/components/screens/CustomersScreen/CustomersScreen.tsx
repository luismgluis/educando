import "./CustomersScreen.scss";
import React from "react";
const TAG = "USERS SCREENS";
type CustomersScreenProps = {
  prop1?: any;
};
const CustomersScreen: React.FC<CustomersScreenProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return <div className="CustomersScreen">CustomersScreen</div>;
};
export default CustomersScreen;
