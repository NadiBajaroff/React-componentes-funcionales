import React from 'react';

export default function Recordatorio(props) {
    
        return (
            <div className="recordatorio">
                <h4>Seleccion anterior: {props.historial[props.historial.length-1]}</h4>
                <h4>Historial de opciones elegidas: 
                    {props.historial.map((opcion, i) => { return (
                        <span key={i}>{'  ' + opcion + '.'}</span> )
                    })}</h4>
            </div>
        )
    
}