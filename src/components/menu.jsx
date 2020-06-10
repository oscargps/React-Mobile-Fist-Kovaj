import React from "react";
import homeImg from "../static/home.svg";
import userImg from "../static/user.svg";
import statisticsImg from "../static/graph.svg";
import reportsImg from "../static/confirmation.svg";
import settingsImg from "../static/settings.svg";
import { Link} from "react-router-dom";
import "./styles/menu.css";
const Menu = (props) => {
  return (
    <div>
      <ul className="list-group list-group-horizontal">
        <li className=" option list-group-item ">
          <Link to="/" className="Link">
            <div>
              <img src={homeImg} alt="" className="menuimg" />
              <br />
              Inicio
            </div>
          </Link>
        </li>
        <li className=" option list-group-item ">
          <div>
            <img src={userImg} alt="" className="menuimg" />
            <br />
            Empresa
          </div>
        </li>
        <li className=" option list-group-item ">
          <Link to="/estadisticas" className="Link">
              <img src={statisticsImg} alt="" className="menuimg" />
              <br />
              Estadisticas
          </Link>
        </li>
        <li className=" option list-group-item ">
          <div>
            <img src={reportsImg} alt="" className="menuimg" />
            <br />
            Informes
          </div>
        </li>
        <li className=" option list-group-item ">
          <div>
            <img src={settingsImg} alt="" className="menuimg" />
            <br />
            Ajustes
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
