import React from "react";
import homeImg from "../static/home.svg";
import userImg from "../static/user.svg";
import statisticsImg from "../static/graph.svg";
import reportsImg from "../static/confirmation.svg";
import settingsImg from "../static/settings.svg";
import { Link } from "react-router-dom";
import "./styles/menu2.css";
const Menu2 = (props) => {
  return (
    <div className="Menu">
      <div className="Menu__Item">
        <Link to="/" className="Link">
          <div>
            <img src={homeImg} alt="" className="Menu__Item-img" />
            <br />
            Inicio
          </div>
        </Link>
      </div>
      <div className="Menu__Item">
        <Link to="/empresa" className="Link">
          <div>
            <img src={userImg} alt="" className="Menu__Item-img" />
            <br />
            Empresa
          </div>
        </Link>
      </div>
      <div className="Menu__Item">
        <Link to="/estadisticas" className="Link">
          <div>
            <img src={statisticsImg} alt="" className="Menu__Item-img" />
            <br />
            Estadisticas
          </div>
        </Link>
      </div>
      <div className="Menu__Item">
        <Link to="informes" className="Link">
          <div>
            <img src={reportsImg} alt="" className="Menu__Item-img" />
            <br />
            Informes
          </div>
        </Link>
      </div>
      <div className="Menu__Item">
        <Link to="ajustes" className="Link">
          <div>
            <img src={settingsImg} alt="" className="Menu__Item-img" />
            <br />
            Ajustes
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu2;
