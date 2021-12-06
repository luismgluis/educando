import "./SubjectScreen.scss";
import React from "react";
const TAG = "SUBJECT SCREEN";
type SubjectScreenProps = {
  prop1?: any;
};
const SubjectScreen: React.FC<SubjectScreenProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return <div className="SubjectScreen">Soy subject screen.</div>;
};
export default SubjectScreen;
