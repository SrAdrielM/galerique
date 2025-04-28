import React from "react";
import '../styles/CarritoCompra.css';
import Vector2 from '../imgs/Vector2.png';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";

function CarritoCompra() {
  return (
    <>
      <Navbar />
      <MainMenu />
     

      <div className="titulo-C">
        <h2>
          <img className="img-carrito" src={Vector2} alt="" />
          Artículos agregados al carrito de compra
        </h2>
      </div>

      {[1, 2, 3].map((_, i) => (
        <a href="#" className="card-link-C" key={i}>
          <div className="card-C">
            <div className="card-image-C"></div>
            <div className="card-content-C">
              <div>
                <h4 className="card-title-C">Título de la obra</h4>
                <p className="card-description-C">
                  Descripción general: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin maximus condimentum tortor, a
                  tincidunt odio scelerisque nec. Donec aliquam augue est,
                  vitae elementum dolor viverra id.
                </p>
              </div>
              <div className="card-price-C">Precio: $99.00</div>
            </div>
          </div>
        </a>
      ))}

      <Footer />
    </>
  );
}

export default CarritoCompra;
