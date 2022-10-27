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
              <div className='col-12 col-lg-5 mt-5'>
                <h3>título compras online</h3>
                <p id="product_id">Producto </p>

                <div className='rating-outer'>
                  <div className="rating-inner" >

                  </div>
                </div>
              </div>
              <div>
                <p id="precio_producto">Valor</p>
                <div className="stockCounter d-inline">
                  <p id="precio_producto">Valor</p>
                  <input type="number" className="form-control count d-inline" value="{quantity}" readOnly/>
                </div>
            
                <button type="button" id="carrito_btn" className="btn btn-outline-success d-inline ml-4" >
                  Comprar
                </button>
                
                <h4 className="mt-2">Descripción:</h4>
                <p>Descripción</p>
                
                <h5 className="mt-2">Stock:</h5>
                  <span className="btn btn-outline-warning minus" onClick="{decreaseQty}">-</span>
                  <span className="btn btn-outline-primary plus" onClick="{increaseQty}">+</span>
                
                <p id="vendedor">Vendido por: <strong></strong></p>
              </div>
          </div>

          <div className='row d-flex justify-content-around'>
              <div className='col-12 col-lg-5 mt-5'>
                <h3>título compras online</h3>
                <p id="product_id">Producto </p>

                <div className='rating-outer'>
                  <div className="rating-inner" >

                  </div>
                </div>
              </div>
              <div>
                <p id="precio_producto">Valor</p>
                <div className="stockCounter d-inline">
                  <p id="precio_producto">Valor</p>
                  <input type="number" className="form-control count d-inline" value="{quantity}" readOnly/>
                </div>
            
                <button type="button" id="carrito_btn" className="btn btn-outline-success d-inline ml-4" >
                  Comprar
                </button>
                
                <h4 className="mt-2">Descripción:</h4>
                <p>Descripción</p>
                
                <h5 className="mt-2">Stock:</h5>
                <span className="btn btn-outline-warning minus" onClick="{decreaseQty}">-</span>
                  <span className="btn btn-outline-primary plus" onClick="{increaseQty}">+</span>
                
                <p id="vendedor">Vendido por: <strong></strong></p>
              </div>
          </div>

          <div className='row d-flex justify-content-around'>
              <div className='col-12 col-lg-5 mt-5'>
                <h3>título compras online</h3>
                <p id="product_id">Producto </p>

                <div className='rating-outer'>
                  <div className="rating-inner" >

                  </div>
                </div>
              </div>
              <div>
                <p id="precio_producto">Valor</p>
                <div className="stockCounter d-inline">
                  <p id="precio_producto">Valor</p>
                  <input type="number" className="form-control count d-inline" value="{quantity}" readOnly/>
                </div>
            
                <button type="button" id="carrito_btn" className="btn btn-outline-success d-inline ml-4" >
                  Comprar
                </button>
                
                <h4 className="mt-2">Descripción:</h4>
                <p>Descripción</p>
                
                <h5 className="mt-2">Stock:</h5>
                  <span className="btn btn-outline-warning minus" onClick="{decreaseQty}">-</span>
                  <span className="btn btn-outline-primary plus" onClick="{increaseQty}">+</span>
                
                <p id="vendedor">Vendido por: <strong></strong></p>
              </div>
          </div>
        </> 
      )
    }
  ;
export default Carrito;

