import React from "react";

import SubjectCard from "./SubjectCard";
const TAG = "SUBJECT SCREEN";
type SubjectScreenProps = {
  prop1?: any;
};
const SubjectScreen: React.FC<SubjectScreenProps> = ({ prop1 }) => {
  console.log(TAG, "render");
  return (
    <div className="SubjectScreen">
      <SubjectCard
        title="Danza"
        description="Enfocada en culturas antiguas"
        img={
          "https://firebasestorage.googleapis.com/v0/b/nuestra-tribu.appspot.com/o/banners%2Fdanza1.png?alt=media&token=e96c048d-d0c4-4afe-b528-4c628f22f4ff"
        }
      />
      <SubjectCard
        title="Matematicas"
        description="Razonamiento logico"
        img={
          "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/03/fondo-matematicas_23-2148146270.jpg"
        }
        classRooms={[]}
      />
    </div>
  );
};
export default SubjectScreen;
