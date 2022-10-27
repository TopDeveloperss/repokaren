import Autorizacion from './Autorizacion.js';
import Home from './components/listaUsuarios/home';
import ListaProductos from './components/listaUsuarios/ListaProductos.jsx';
import ModificarProducts from './components/listaUsuarios/modificarProduct.jsx';
import VentasAdmin from './components/listaUsuarios/ventasAdmin.js';
import Carrito from './components/listaUsuarios/Carrito.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter, Link} from "react-router-dom"; 
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Fragment } from 'react'; 



function App() {
  return (    
    <BrowserRouter>
      <Nav justify variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="ventas" as={Link} to="/ventas">Ventas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="productos" as={Link} to="/productos">Productos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="lista" as={Link} to="/lista">Lista</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Carrito" as={Link} to="/carrito">Carro de compras</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Roles</Nav.Link>
        </Nav.Item>      
      </Nav>   
      <Routes>
        <Route path='/productos' element={Autorizacion(ModificarProducts, ["USER", "ADMIN"])}/>
        <Route path='/home' element={Autorizacion(Home, ["USER", "ADMIN"])}/>
        <Route path='/ventas' element={Autorizacion(VentasAdmin, ["USER", "ADMIN"])}/>
        <Route path='/lista' element={Autorizacion(ListaProductos, ["USER", "ADMIN"])}/>
        <Route path= "/carrito" element= {Autorizacion(Carrito, ["USER"])}/>          
      </Routes>
    </BrowserRouter>    
  );
}
export default App;
