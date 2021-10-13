import React from 'react';
import data from './data.json'

export default function Historia(props){

        const id = '' + props.relato + props.letra
        const eleccion = data.find(function(dat){return dat.id === id})
        
        return (
            
            <h3 className="historia">{eleccion.historia}</h3>
        )
    
}