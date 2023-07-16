import React,{Fragment,useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Ventasporlibro = ({nomLibro}) => {
  const[ventlib, setventlib]= useState([]);

  useEffect(()=>{
    axios.get("https://localhost:44383/api/ventas/VentasLibro/"+ nomLibro).then(resp =>{
        setventlib(resp.data);
    }).catch(error =>{
      console.log(error);
    })
  },[nomLibro])
  var n=1;
  var stock;
  var nedicion;
  var total=0;
  var filas=ventlib.length;

  ventlib.map(item=>{
    stock=item.stkLibro;
    nedicion=item.edicion;
    total+=item.total;
  })

  return (
    <Fragment>
      <h1>Ventas por Libro</h1>
      <td colSpan='6' align='center'>
          Stock: {stock}          
      </td><br/>
      <td colSpan='6' align='center'>
          Numero Edicion: {nedicion}          
      </td>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>NUMVENTA</th>
            <th>CODLIB</th>
            <th>NOMLIB</th>
            <th>CANTIDAD</th>
            <th>PRECIO</th>
            <th>ESTADO</th>
          </tr>
        </thead>
        <tbody className='text-start'>
          {ventlib.map(item=>(
            <tr key={item.codLibro}>
              <td>{n++}</td>
              <td>{item.numVta}</td>
              <td>{item.codLibro}</td>
              <td>{item.nomLibro}</td>
              <td>{item.cantidad}</td>
              <td>{item.precio}</td>
              <td>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <td colSpan='6' align='center'>
            Suma Total de Ventas: {total.toFixed(2)}          
          </td><br />
          <td colSpan='6' align='center'>
            Cantidad Ventas: {filas}          
          </td>
    </Fragment>
  )
}

export default Ventasporlibro