import React,{Fragment,useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Ventasporautor = ({aut}) => {

    const[ventas, setventas]= useState([]);

  useEffect(()=>{
    axios.get("https://localhost:44383/api/ventas/LibrosAutor/"+ aut).then(resp =>{
        setventas(resp.data);
    }).catch(error =>{
      console.log(error);
    })
  },[aut])
  var n=1;
  var pais;
  var fechnac;
  var totalgeneral=0;

  ventas.map(item=>{
    pais=item.nomPais;
    fechnac=item.fecNacAut;
    totalgeneral+=item.totautor;
  })

  return (
    <Fragment>
      <h1>Ventas por Libro</h1>
      <td colSpan='6' align='center'>
          Pais: {pais}          
      </td><br/>
      <td colSpan='6' align='center'>
          Fecha Nacimiento: {fechnac}          
      </td>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>CODLIB</th>
            <th>NOMLIB</th>
            <th>PRELIB</th>
            <th>STOCK</th>
          </tr>
        </thead>
        <tbody className='text-start'>
          {ventas.map(item=>(
            <tr key={item.nomLibro}>
              <td>{n++}</td>
              <td>{item.codLibro}</td>
              <td>{item.nomLibro}</td>
              <td>{item.preLibro}</td>
              <td>{item.stkLibro}</td>
            </tr>
          ))}
          <td colSpan='6' align='center'>
            Total general de los libros: {totalgeneral.toFixed(2)}          
          </td>
        </tbody>
      </table>
    </Fragment>
  )
}

export default Ventasporautor