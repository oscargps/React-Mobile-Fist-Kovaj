import React from 'react'
import './styles/CasosdeFiebre.css'
import cold from '../static/cold.svg'
import hot from '../static/hot.svg'
const CasosdeFiebre = () =>{
    return(
        <div className="CasosdeFiebre">
            <p className="CasosdeFiebre__title">Casos de Fiembre en la empresa</p>
            <div className="CasosdeFiebre__Alta">
                <img className="CasosdeFiebre__Imagen" src={hot} alt=""/>
                <p className="CasosdeFiebre__Porcentaje">0%</p>
            </div>
            <div className="CasosdeFiebre__Alta">
                <img className="CasosdeFiebre__Imagen" src={cold} alt=""/>
                <p className="CasosdeFiebre__Porcentaje">100%</p>
            </div>
            <p className="CasosdeFiebre__more">Ver mas  ></p>

        </div>
    )
}

export default CasosdeFiebre