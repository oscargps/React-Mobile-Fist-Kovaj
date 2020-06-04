import React, { Component } from "react";
import "./styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UltimasNoticias from "../components/UltimasNoticias";
import Estadisticas from "../components/Estadisticas";
class Home extends Component {
  state = {
    searching: false,
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col col-xs-8">nombre</div>
          <div className="col col-xs-4">
            <button type="button" className="SearchButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div>
          <UltimasNoticias />
        </div>
        <div>
            <Estadisticas/>
        </div>
      </div>
    );
  }
}

export default Home;
