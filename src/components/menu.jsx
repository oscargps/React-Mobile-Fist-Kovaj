import React from "react";
import homeImg from '../static/home.svg'
import userImg from '../static/user.svg'
import statisticsImg from '../static/graph.svg'
import reportsImg from '../static/confirmation.svg'
import settingsImg from '../static/settings.svg'
import './styles/menu.css'
const Menu = (props) => {
  return (
      <ul className="list-group list-group-horizontal">
        <li className=" option list-group-item ">
            <div>
                <img src={homeImg} alt="" className="menuimg"/>
                <br/>
                Inicio
            </div>
        </li>
        <li className=" option list-group-item ">
            <div>
                <img src={userImg} alt="" className="menuimg"/>
                <br/>
                Empresa
            </div>
        </li>
        <li className=" option list-group-item ">
            <div>
                <img src={statisticsImg} alt="" className="menuimg"/>
                <br/>
                Estadisticas
            </div>
        </li>
        <li className=" option list-group-item ">
            <div>
                <img src={reportsImg} alt="" className="menuimg"/>
                <br/>
                Informes
            </div>
        </li>
        <li className=" option list-group-item ">
            <div>
                <img src={settingsImg} alt="" className="menuimg"/>
                <br/>
                Ajustes
            </div>
        </li>
        
      </ul>
  );
};

export default Menu
