import React,{Fragment,useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Ventasporlibro from './Ventasporlibro';

const Selectlibros = () => {

    const[libros,setlibros]=useState([]);
    useEffect(()=>{
        axios.get("https://localhost:44383/api/ventas/Libros").then(resp =>{
            setlibros(resp.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const[libro,setlibro]=useState("");
    function recuperarlibro(e){
        setlibro(e.target.value);
    }

  return (
    <Fragment>
      <div className='text-center'>
        <div className='form-group'>
          <h1>Consulta de Ventas por Libro</h1>
          <h4><b>Seleccione un Libro</b></h4>
          <select name='cbolibro' className='form-control' value={libro}
              onChange={(e)=> recuperarlibro(e)}>
              <option value='Seleccionar'>Seleccionar Libro</option>
              {libros.map(item =>(
                <option key={item.nomLibro} value={item.nomLibro}>
                        {item.nomLibro}
                </option>
              ))}
          </select>         
        </div>
        <br/>
        <hr/>
        <div>
          <Ventasporlibro nomLibro={libro} />
        </div>
      </div>
    </Fragment>
  )
}

export default Selectlibros