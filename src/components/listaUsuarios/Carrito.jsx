//import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import datosUsuarioJson from "./Product.json";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';
//import styles from './listaUsuarios.module.css';
import Table from 'react-bootstrap/Table';


const  Carrito = () => 
    {
      const [datosProducto, setDatosProducto] = useState(datosUsuarioJson);  
      
      const [newProducto, setNewProducto] = useState({nombre:"",descripcion:"",precio:"", stock:""});

      const modificarNombre = (nombrep) => { 
        setNewProducto({nombre:nombrep, descripcion:newProducto.descripcion, precio:newProducto.precio, stock:newProducto.stock})
      }

      const modificarDescripcion = (descripcionp) => {  
        setNewProducto({descripcion:descripcionp, nombre:newProducto.nombre, precio:newProducto.precio, stock:newProducto.stock})
      }

      const modificarPrecio = (preciop) => {  
        setNewProducto({precio:preciop, nombre:newProducto.nombre, descripcion:newProducto.descripcion, stock:newProducto.stock})
      }

      const modificarStock = (stockp) => {  
        setNewProducto({stock:stockp, nombre:newProducto.nombre, precio:newProducto.precio, descripcion:newProducto.descripcion})
      }

      const eliminarProducto = (id) => {  
        const listaProductosNew = datosProducto.filter(
          (producto) => (producto.nombre !== id) // me tiene dudando
        )
        setDatosProducto(listaProductosNew)
      }

      const addProduct = (e) => { 
        setDatosProducto([...datosProducto, newProducto])
        e.target.form.elements.nombrenewinput.value = "";  
        e.target.form.elements.descripcionnewinput.value = ""; 
        e.target.form.elements.precionewinput.value = "";
        e.target.form.elements.stocknewinput.value = "";
      }

      return (
        <React.Fragment>
          <Form onSubmit = { 
            (e) => {
              addProduct(e)
            }
            }>
            <Table striped responsive="md" >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Img</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                      <td></td>
                      
                  </tr>
                  {
                    datosProducto.map(
                      (producto, index) => { 
                        return(
                          <tr>
                            <td>{index}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.stock}</td>
                            <td><Button variant="outline-success" onClick= { 
                              ()  =>  {
                                eliminarProducto(producto.id)
                              }
                              } >Agregar a Carrito</Button></td>
                        
                          </tr>
                        );
                      }
                    )
                  }
                  
                  
                </tbody>
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Item >{12}</Pagination.Item>
                  <Pagination.Item>{13}</Pagination.Item>
                  <Pagination.Item disabled>{14}</Pagination.Item>

                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
            </ Table>
          </Form>
        </React.Fragment>
      )
    }
;

export default Carrito; 
