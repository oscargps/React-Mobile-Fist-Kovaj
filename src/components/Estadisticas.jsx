import React from "react";
import LavadoManos from "../components/LavadoManos";
import EstadodeAnimo from "../components/EstadodeAnimo";
import "./styles/Estadisticas.css";
const Estadisticas = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col title">Estadisticas</div>
        <div className="col seemore">Ver Todo ></div>
      </div>
      <div className="Estadisticas">
        <LavadoManos />
        <EstadodeAnimo />
      </div>
    </div>
  );
};

export default Estadisticas;
