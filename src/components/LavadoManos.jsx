import React from "react";

import "./styles/LavadoManos.css";
import Lavado from "../static/wash-your-hands.svg";
const LavadoManos = (props) => {
  return (
    <div className="LavadoManos">
      <div className=" ">
        <img src={Lavado} alt="" className="Imagen" />
      </div>
      <div className=" ">
        <p className="Porcentaje">80%</p>
        <p className="text">Se lavaron las manos</p>
        <p className="seemore">Ver mas></p>
      </div>
    </div>
  );
};

export default LavadoManos;
