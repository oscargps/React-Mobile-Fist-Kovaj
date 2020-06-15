import React from 'react'
import './styles/CasoSospechosos.css'
import Virus from '../static/virus_blue.svg'
const CasoSospechosos = (props) =>{

    return(
        <div className="CasoSospechosos">
            <img src={Virus} alt="" className="CasoSospechosos__Img"/>
            <div className="CasoSospechosos__Content">
                <h5>Casos de COVID-19</h5>
                <div>
                    <p>
                    Sospechosos <span className="CasoSospechosos__Content-suspect"> 2 </span>
                    </p>
                    <p>
                        Confirmados 0
                    </p>
                </div>
            </div>
        </div>
    )

}

export default CasoSospechosos