import React from "react";
import './styles/EstadodeAnimo.css'
import happy from '../static/happy.svg'
import sad from '../static/sad.svg'
const EstadodeAnimo = () =>{

    return(
        <div className="EstadodeAnimo">
            <span className="EstadodeAnimo__titulo">Estado de Animo</span>
            <div className=" row EstadodeAnimo__emojis  justify-content-around ">
                <div className="col-6">
                    <img className="EstadodeAnimo__emojis-emojis" src={happy} alt=""/>
                    <br/>
                    <span className="EstadodeAnimo__emojis-porcentaje">91%</span>
                </div>
                <div className="col-6">
                    <img className="EstadodeAnimo__emojis-emojis" src={sad} alt=""/>
                    <br/>
                    <span className="EstadodeAnimo__emojis-porcentaje">9%</span>
                </div>
            </div>
            <div className="EstadodeAnimo__seemore">
                Ver mas>
            </div>
        </div>
    )
}

export default EstadodeAnimo