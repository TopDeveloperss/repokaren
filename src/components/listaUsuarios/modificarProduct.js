//import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import datosUsuarioJson from "./Product.json";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';
//import styles from './listaUsuarios.module.css';
import Table from 'react-bootstrap/Table';


const  ModificarProducts = () => 
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
        <div>
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
                            <td><Button variant="outline-danger" onClick= { 
                              ()  =>  {
                                eliminarProducto(producto.id)
                              }
                              } >Eliminar</Button></td>
                          <td><Button variant="outline-warning" onClick= { 
                              ()  =>  {
                                //editarProducto(producto.id)
                              }
                              } >Editar</Button></td>
                          </tr>
                        );
                      }
                    )
                  }
                  
                  <tr>
                      <td></td>
                      <td>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                          <Form.Control
                            type="text" 
                            placeholder="Name"
                            aria-label="date"
                            aria-describedby="basic-addon1"
                            onChange = { 
                              (e) => {modificarNombre(e.target.value)} 
                            }
                          />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon2">Descripción</InputGroup.Text>
                          <Form.Control
                            placeholder="Descripción"
                            aria-label="descripcion"
                            aria-describedby="basic-addon2"
                            onChange = { 
                              (e) => {modificarDescripcion(e.target.value)} 
                            }
                          />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon3">Precio</InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="precio"
                            aria-label="valor"
                            aria-describedby="basic-addon3"
                            onChange = {
                              (e) => {modificarPrecio(e.target.valor)}
                            }
                          />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon3">Stock</InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="stock"
                            aria-label="valor"
                            aria-describedby="basic-addon3"
                            onChange = {
                              (e) => {modificarStock(e.target.valor)}
                            }
                          />
                        </InputGroup>
                      </td>
                      <td>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon3">img</InputGroup.Text>
                            <img href="./git add">

                            </img>
                        </InputGroup>
                      </td>
                      <td>
                        <Button variant="outline-success" onClick={
                          () => {
                            addProduct()
                          }
                        } 
                          >Agregar
                        </Button>
                      </td>
                  </tr>
                </tbody>
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Item active>{12}</Pagination.Item>
                  <Pagination.Item>{13}</Pagination.Item>
                  <Pagination.Item disabled>{14}</Pagination.Item>

                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
            </ Table>
          </Form>
        </div>
      )
    }
;

export default ModificarProducts; 
