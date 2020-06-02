import React from "react";
import "./styles/Noticia.css";
const Noticia = (props) => {
  return (
    <div className="Noticia">
      <img
        className="Noticia__Imagen"
        src="https://www.eltiempo.com/files/image_640_360/uploads/2020/03/06/5e62cdc6b8baf.jpeg"
        alt=""
      />
      <div className="Noticia__texto">
        <p>Este es el texto</p>
      </div>
    </div>
  );
};

export default Noticia;
