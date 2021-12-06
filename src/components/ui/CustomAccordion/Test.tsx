import "./Ejemplo.scss";
import React, { useState, useEffect } from "react";
const TAG = "EJEMPLO";
type EjemploProps = {
  name: string | null;
  title: string;
};

const Ejemplo: React.FC<EjemploProps> = ({ name = null, title = "" }) => {
  console.log(TAG, "render");
  //const validado = typeof name !== "undefined";
  const [valor, setValor] = useState([]);

  useEffect(() => {
    const newArr = [12, 31, 231, 23, 123, 123, 13];
  }, []);

  return (
    <div className="Ejemplo">
      <h1>{title}</h1>
      {name !== null && (
        <div>
          este es el nombre:
          <h5>{name}</h5>
        </div>
      )}
      {valor.map((item) => {
        return <div>el item es {item}</div>;
      })}
    </div>
  );
};
export default Ejemplo;
