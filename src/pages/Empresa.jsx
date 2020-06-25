import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import userImg from "../static/user.svg";
import man from "../static/man.svg";
import "./styles/Empresa.css";
import CardTrabajador from "../components/CardTrabajador";
class Empresa extends Component {
  state = {};
  render() {
    return (
      <div className="Empresa">
        <div className="Empresa__header row">
          <div className="Empresa__header-img col col-lg-4">
            <img src={userImg} alt="" />
            <br />
            <span>Empresa</span>
          </div>
          <div className="Empresa__header-searchbar col col-lg-4">
            <form>
              <input type="text" className="" />
              <FontAwesomeIcon
                className="Empresa__header-searchbar-icon"
                icon={faSearch}
              />
            </form>
          </div>
        </div>
        <div className="Empresa__Title">
          <p className="Empresa__Title-Text">Fichas de Trabajadores</p>
          <div className="Empresa__Title-New">
              <FontAwesomeIcon
                className="notify-badge"
                icon={faPlus}
              />
            <img src={man} className="Empresa__Title-Img" alt="" />
          </div>
        </div>
        <div className="Empresa__Content">
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
          <CardTrabajador />
        </div>
      </div>
    );
  }
}
export default Empresa;
