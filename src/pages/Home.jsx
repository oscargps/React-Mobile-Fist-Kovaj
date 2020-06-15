import React, { Component } from "react";
import "./styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UltimasNoticias from "../components/UltimasNoticias";
import EstadisticasComp from "../components/EstadisticasComp";
import ConsejosOficiales from "../components/ConsejosOficiales";
class Home extends Component {
  state = {
    searching: false,
  };

  render() {
    return (
      <div className="Home">
        <div className="HeaderHome">
          <div className="HeaderHome__UserName">
            <div className="UserName__inicial">U</div>
            <div className="UserName__Name">
              <p>Bienvenido</p>
              <p>URRA SA ESP</p>
            </div>
          </div>
          <div className="HeaderHome__Search">
            <button type="button" className="SearchButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <UltimasNoticias />
        <EstadisticasComp />
        <ConsejosOficiales />
      </div>
    );
  }
}

export default Home;
