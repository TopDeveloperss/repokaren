import Autorizacion from './Autorizacion.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaProductos from './components/listaUsuarios/ListaProductos.js';
import Home from './components/listaUsuarios/home';
import {Routes, Route, BrowserRouter} from "react-router-dom"; 
import ModificarProducts from './components/listaUsuarios/modificarProduct.js';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Fragment } from 'react'; 
import VentasAdmin from './components/listaUsuarios/ventasAdmin.js';


function App() {
  return (
    <>
      <BrowserRouter>
      <Nav justify variant="tabs" defaultActiveKey="/home">
       <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ventas">Ventas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ver">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/lista">LISTA</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Roles
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
   
        <Routes>
          <Route path='/ver' element={Autorizacion(ModificarProducts, ["USER", "ADMIN"])}/>
          <Route path='/home' element={Autorizacion(Home, ["USER", "ADMIN"])}/>
          <Route path='/ventas' element={Autorizacion(VentasAdmin, ["USER", "ADMIN"])}/>
          <Route path='/lista' element={Autorizacion(ListaProductos, ["USER", "ADMIN"])}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
