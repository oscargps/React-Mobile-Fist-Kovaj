import React from 'react'
import './styles/EstadodeSalud.css'
import healthStatus from '../static/air-pollution.svg'
const EstadodeSalud = () =>{
    return(
        <div className="EstadodeSalud">
            <p className="EstadodeSalud__title">Estado de Salud del Personal</p>
            <img src={healthStatus} alt="Estado de salud" className="EstadodeSalud__Imagen"/>
            <p className="EstadodeSalud__Porcentaje">
            98%
            </p>
            <p className="EstadodeSalud__more">Ver mas...</p>

        </div>
    )
}

export default EstadodeSalud