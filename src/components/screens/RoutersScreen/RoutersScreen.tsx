import "./RoutersScreen.scss";
import React from "react";
const TAG = "ROUTERS SCREEN";
type RoutersScreenProps = {
  prop1?: any;
};
const RoutersScreen: React.FC<RoutersScreenProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return <div className="RoutersScreen">RoutersScreen</div>;
};
export default RoutersScreen;
