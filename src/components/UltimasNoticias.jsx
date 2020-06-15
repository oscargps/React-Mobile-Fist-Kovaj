import React from "react";
import Noticia from "./Noticia";
import './styles/UltimasNoticias.css'
const LastNews = (props) => {
  return (
    <div className="UltimasNoticias">
      <div className="row">
        <div className="col title">
          Últimas Noticias
        </div>
        <div className="col seemore">
          Ver Todo >
        </div>
      </div>
      <div className="Noticias">
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
        <Noticia />
      </div>
    </div>
  );
};

export default LastNews;
