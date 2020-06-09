import React from "react";
import "./styles/ConsejosOficiales.css";
import Consejo from "./Consejo";
const ConsejosOficiales = () => {
  return (
    <div className="ConsejosOficiales">
      <div className=" title ConsejosOficiales__title">Consejos Oficiales</div>
      <div className="ConsejosOficiales__consejos">
        <Consejo title="¿Que son los coronavirus?" />
        <Consejo bg="#eaec6d" color="black" title="¿Cuales son los sintomas?" />
        <Consejo title="Cómo se transmite" />
        <Consejo bg="#eaec6d" color="black" title="Cómo prevenirlo" />
      </div>
    </div>
  );
};
export default ConsejosOficiales;
