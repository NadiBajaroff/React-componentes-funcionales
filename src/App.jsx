import {useState} from 'react';
import Historia from './components/Historia';
import Opcion from './components/Opcion'
import Recordatorio from './components/Recordatorio';
import Swal from "sweetalert2";


export default function App() {

  const [state, setState] = useState({etapa : 0, relato : 1, letra : "", historial : []})


  const handleClickA = () => {
    state.etapa > 4 ? 
    Swal.fire({
      title : "Fin del recorrido, nos vemos en otro sueño!",
      showCancelButton: true,
      confirmButtonText: 'Ir al comienzo',
      cancelButtonText: 'Hasta la proxima'
    }).then((result) => {
      if(result.isConfirmed){window.location.reload()}}) :
    setState({
      etapa : state.etapa + 2,
      relato : state.relato + 1,
      letra : "a",
      historial : [...state.historial, "a"]
    })
  }

  const handleClickB = () => {
    state.relato > 4 ? Swal.fire({
      title : "Fin del recorrido, nos vemos en otro sueño!",
      showCancelButton: true,
      confirmButtonText: 'Ir al comienzo',
      cancelButtonText: 'Hasta la proxima'
    }).then((result) => {
      if(result.isConfirmed){window.location.reload()}}) :
    setState({
      etapa : state.etapa + 2,
      relato : state.relato + 1,
      letra : "b",
      historial : [...state.historial, "b"]
    })
  }

  
    return (
      
      <div className="layout">
        <h1 className="titulo">Elige tu propio camino..</h1>
        <Historia relato={state.relato} letra={state.letra}/>
        <div className="opciones">
          <Opcion letra="A" click={handleClickA} etapa={state.etapa}/>
          <Opcion letra="B" click={handleClickB} etapa={state.etapa}/>
        </div>
        <Recordatorio historial={state.historial}/>
      </div>
    );
  
}


