import React from 'react'
import './styles/Consejo.css'
import virus from '../static/virus.svg'
const Consejo = (props) =>{

    return(
        <div style={{backgroundColor: props.bg}} className="Consejo">
           <img className="Consejo__icon" src={virus} alt=""/>
           <div  style={{color: props.color}} className="Consejo_Title">{props.title}</div>
        </div>
    )

}

export default Consejo