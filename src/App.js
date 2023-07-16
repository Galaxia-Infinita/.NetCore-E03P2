import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Principal from './Components/principal';
import Autores from './Components/Selectautores';
import Libros from './Components/Selectlibros';

function App() {
  return (
    <Fragment>
      <Router>
        <div className='container mt-5 m-auto'>
          <div className='btn-group'>
            <Link to="/" className='btn btn-light'>Principal</Link>
            <Link to="/VentasPorLibro" className='btn btn-light'>Listado de ventas por libro</Link>
            <Link to="/VentasPorAutor" className='btn btn-light'>Listado de ventas por autor</Link>
          </div>
         
        <hr/>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/VentasPorLibro' element={<Libros/>}/>
          <Route path='/VentasPorAutor' element={<Autores/>}/>
        </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
