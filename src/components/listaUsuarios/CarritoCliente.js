import Button from 'react-bootstrap/Button';
import datosUsuarioJson from "./Product.json";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const  Carrito = () => 
  {
    const productoModificadoJson = JSON.parse(localStorage.getItem("productoModificado"))
      let productModificado = false
      const [newProducto, setNewProducto] = useState(localStorage.getItem(productoModificadoJson));
   
      const add = (e) => {
      const datosProducto = JSON.parse(localStorage.getItem("productos"))
        for(let i = 0; i < datosProducto.length; i++){
          if(datosProducto[i].nombre === newProducto.nombre){ 
            datosProducto[i].descripcion = newProducto.descripcion
            datosProducto[i].precio = newProducto.precio 
            datosProducto[i].stock = newProducto.stock 
          }
        }
      
        localStorage.setItem("producto", JSON.stringify(datosProducto)) 
        localStorage.setItem("productoModificado",JSON.stringify(newProducto))
        productModificado = true
    
        alert("Producto editado")
        e.target.form.elements.nombrenewinput.value = "";  
        e.target.form.elements.descripcionnewinput.value = ""; 
        e.target.form.elements.precionewinput.value = "";
        e.target.form.elements.stocknewinput.value = "";
      }

      return (
        <>
          <div className='row d-flex justify-content-around'>
            
          </div>
        </> 
      )
    }
  ;
export default Carrito;

