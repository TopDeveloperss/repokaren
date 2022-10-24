/*import Button from 'react-bootstrap/Button';
import datosUsuarioJson from "./Product.json";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import styles from './listaUsuarios.module.css';
import Table from 'react-bootstrap/Table';


const ListaUsuarios = () => 
    {
      const [datosUsuario, setDatosUsuario] = useState(datosUsuarioJson);  
      
      const [newUsuario, setNewUsuario] = useState({nombre:"",descripcion:"",precio:"", stock:""});

      const modificarNombre = (nombrep) => { 
        setNewUsuario({nombre:nombrep, descripcion:newUsuario.descripcion, precio:newUsuario.precio, stock:newUsuario.stock})
      }

      const modificarDescripcion = (descripcionp) => {  
        setNewUsuario({descripcion:descripcionp, nombre:newUsuario.nombre, precio:newUsuario.precio, stock:newUsuario.stock})
      }

      const modificarPrecio = (preciop) => {  
        setNewUsuario({precio:preciop, nombre:newUsuario.nombre, descripcion:newUsuario.descripcion, stock:newUsuario.stock})
      }

      const modificarStock = (stockp) => {  
        setNewUsuario({stock:stockp, nombre:newUsuario.nombre, precio:newUsuario.precio, descripcion:newUsuario.descripcion})
      }

      const eliminarUsuario = (id) => {  
        const listaUsuariosNew = datosUsuario.filter(
          (usuario) => (usuario.nombre !== id) // me tiene dudando
        )
        setDatosUsuario(listaUsuariosNew)
      }

      const addUsuario = (e) => { 
        setDatosUsuario([...datosUsuario, newUsuario])
        e.target.form.elements.nombrenewinput.value = "";  
        e.target.form.elements.descripcionnewinput.value = ""; 
        e.target.form.elements.precionewinput.value = "";
        e.target.form.elements.stocknewinput.value = "";
      }

      return (
        <div>
          <Form onSubmit = { 
            (e) => {
              addUsuario(e)
            }
            }>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {
                  datosUsuario.map(
                    (usuario, index) => { 
                      return(
                        <tr>
                          <td>{index}</td>
                          <td>{usuario.nombre}</td>
                          <td>{usuario.descripcion}</td>
                          <td>{usuario.precio}</td>
                          <td>{usuario.stock}</td>
                          <td><Button variant="danger" onClick= { 
                            ()  =>  {
                              eliminarUsuario(usuario.id)
                            }
                            } >Eliminar</Button></td>
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
                          aria-label="Id"
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
                      <Button variant="primary" onClick={
                        () => {
                          addUsuario()
                        }
                      } 
                        >Agregar
                      </Button>
                    </td>
                </tr>
              </tbody>
            </ Table>
          </Form>
        </div>
      )
    }
;

export default ListaUsuarios; */
