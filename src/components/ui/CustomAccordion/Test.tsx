import "./Ejemplo.scss";
import React from "react";
const TAG = "EJEMPLO";
type EjemploProps = {
  name: string | null;
  title: string;
};
const Ejemplo: React.FC<EjemploProps> = ({ name = null, title = 44 }) => {
  console.log(TAG, "render");
  //const validado = typeof name !== "undefined";
  title = 665;
  return (
    <div className="Ejemplo">
      <h1>{title}</h1>
      {name !== null && (
        <div>
          este es el nombre:
          <h5>{name}</h5>
        </div>
      )}
    </div>
  );
};
export default Ejemplo;
