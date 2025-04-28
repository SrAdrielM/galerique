import React from "react";
import '../styles/CarritoCompra.css'
import Group from '../imgs/Group.png'
import Vector from '../imgs/Vector.png'
import logo from '../imgs/logo.png'
import Vector2 from '../imgs/Vector2.png'


function CarritoCompra() {

    return (
        <>
         <div class="navbar">
         <div class="navbar-logo"><img src={logo} alt="" /></div>
         
         <div class="search-bar">
  <input type="text" class="search-input" placeholder="Buscar..." />
  <button class="search-btn">
    <img src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="Buscar" />
  </button>
</div>
        <button class="navbar-item"><img src={Group} alt="" /></button>
        <button class="navbar-item"><img src={Vector} alt="" /></button>
        <button class="navbar-login">Log in</button>
        <button class="navbar-signin">Sign in</button>
    </div>
    <div class="navbar2">
    <button class="navbar-item2">inicio</button>
    <button class="navbar-item2">Cuadros</button>
    <button class="navbar-item2">Sobre Nosotros</button>
    <button class="navbar-item2">Contacto</button>
    </div>

    <div class="titulo"><h2><img class ="img-carrito" src={Vector2} alt="" />Articulos agregados al carrito de compra</h2></div>

    <a href="#" class="card-link">
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <div>
        <h4 class="card-title">Titulo de la obra</h4>
        <p class="card-description">Descripcion general: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus condimentum tortor, a tincidunt odio scelerisque nec. Donec aliquam augue est, vitae elementum dolor viverra id.</p>
      </div>
      <div class="card-price">Precio: $99.00</div>
    </div>
  </div>
</a>

<a href="#" class="card-link">
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <div>
        <h4 class="card-title">Titulo de la obra</h4>
        <p class="card-description">Descripcion general: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus condimentum tortor, a tincidunt odio scelerisque nec. Donec aliquam augue est, vitae elementum dolor viverra id.</p>
      </div>
      <div class="card-price">Precio: $99.00</div>
    </div>
  </div>
</a>

<a href="#" class="card-link">
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <div>
        <h4 class="card-title">Titulo de la obra</h4>
        <p class="card-description">Descripcion general: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus condimentum tortor, a tincidunt odio scelerisque nec. Donec aliquam augue est, vitae elementum dolor viverra id.</p>
      </div>
      <div class="card-price">Precio: $99.00</div>
    </div>
  </div>
</a>



    <div class="footer">
        <p>&copy; 2025 Ricaldone. Todos los derechos reservados.</p>
    </div>
        </>
    )
}

export default CarritoCompra