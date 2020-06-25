import React from 'react'
import './styles/CardTrabajador.css'
import man from '../static/man.svg'
const CardTrabajador = () =>{
    return(
        <div className="CardTrabajador">
            <img src={man} className="CardTrabajador__Img" alt=""/>
            <p className="CardTrabajador__Nombre">Juan Andres</p>
            <p className="CardTrabajador__Apellido">Morales Restrepo</p>
            <p className="CardTrabajador__Cedula">110011001</p>
        </div>
    )
}

export default CardTrabajador