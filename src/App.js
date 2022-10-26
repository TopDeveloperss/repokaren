import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components/listaUsuarios/Footer';
import {Fragment} from 'react'; 
import {Routes, Route, BrowserRouter} from "react-router-dom"; 
import Autorizacion from './Autorizacion.js';
import Carrito from './components/listaUsuarios/CarritoCliente.js';
import Container from 'react-bootstrap/Container';
import datosProductoJson from './components/listaUsuarios/Product.json';
import Header from './components/listaUsuarios/Header.js';
import Home from './components/listaUsuarios/home';
import ListaProductos from './components/listaUsuarios/ListaProductos.js';
import ModificarProducts from './components/listaUsuarios/modificarProduct.js';
import Nav from 'react-bootstrap/Nav';
import Pagination from './components/listaUsuarios/Pagination.js';
import ProductoCliente from './components/listaUsuarios/ProductoCliente.js';
import VentasAdmin from './components/listaUsuarios/ventasAdmin.js';



function App() {
  if(localStorage.getItem("productos") == null){ 
    
    localStorage.setItem("productos", JSON.stringify(datosProductoJson))
    

  }
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Nav justify variant="tabs" defaultActiveKey="/home">
       <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ventas">Ventas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/modificarproducto">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/listaP">Lista Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/clienteproducto">Cliente - Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/carrito">cliente - Carrito</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Carrito">Carro de compras</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Roles
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
   
        <Routes>
          <Route path='/modificarproducto' element={Autorizacion(ModificarProducts, ["USER", "ADMIN"])}/>
          <Route path='/home' element={Autorizacion(Home, ["USER", "ADMIN"])}/>
          <Route path='/ventas' element={Autorizacion(VentasAdmin, ["USER", "ADMIN"])}/>
          <Route path='/clienteproducto' element={Autorizacion(ProductoCliente, ["USER", "ADMIN"])}/>
          <Route path='/listaP' element={Autorizacion(ListaProductos, ["USER", "ADMIN"])}/>          
          <Route path='/carrito' element={Autorizacion(Carrito, ["USER", "ADMIN"])}/>

        </Routes>
          <Pagination/>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
