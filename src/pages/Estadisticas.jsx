import React, { Component } from "react";
import statisticsImg from "../static/graph.svg";
import LavadoManos from "../components/LavadoManos";
import EstadodeAnimo from "../components/EstadodeAnimo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import './styles/Estadisticas.css'
class Estadisticas extends Component {
  render() {
    return (
      <div className="Estadisticas">
        <div className="Estadisticas__header row">
          <div className="Estadisticas__header-img col col-lg-4">
            <img src={statisticsImg} alt=""  />
            <br/>
            <span>Estadisticas</span>
            
          </div>
          <div className="Estadisticas__header-searchbar col col-lg-4">
                <form>
                    <input type="text" className=""/>
                    <FontAwesomeIcon className="Estadisticas__header-searchbar-icon" icon={faSearch} />
                </form>
          </div>
        </div>
        <div className="EstadisticasComp">
          <LavadoManos />
          <EstadodeAnimo />
        </div>
      </div>
    );
  }
}

export default Estadisticas;