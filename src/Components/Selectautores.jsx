import React,{Fragment,useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import VentasporAutor from './Ventasporautor';

const Selectautores = () => {

  const[autores,setautores]=useState([]);
    useEffect(()=>{
        axios.get("https://localhost:44383/api/ventas/Autores").then(resp =>{
            setautores(resp.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const[autor,setautor]=useState("");
    function recuperarautor(e){
        setautor(e.target.value);
    }

  return (
    <Fragment>
      <div className='text-center'>
        <div className='form-group'>
          <h1>Consulta de Ventas por Autor</h1>
          <h4><b>Seleccione un Libro</b></h4>
          <select name='cboautor' className='form-control' value={autor}
              onChange={(e)=> recuperarautor(e)}>
              <option value='Seleccionar'>Seleccionar Autor</option>
              {autores.map(item =>(
                <option key={item.nomAutor} value={item.nomAutor}>
                        {item.nomAutor}
                </option>
              ))}
          </select>         
        </div>
        <br/>
        <hr/>
        <div>
          <VentasporAutor aut={autor} />
        </div>
      </div>
    </Fragment>
  )
}

export default Selectautores