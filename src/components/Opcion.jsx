import React from 'react';
import data from './data.json';



export default function Opcion(props) {
    

    const opcionAoB = () => 
        props.letra === "A" ? data[props.etapa].opciones.a : data[props.etapa].opciones.b
    
    

    
        return (
            <div className="opcion">
                <button className="botones" onClick={props.click}>{props.letra}</button>
                <p className="opciones">{opcionAoB()}</p>
            </div>            
        )
    
}