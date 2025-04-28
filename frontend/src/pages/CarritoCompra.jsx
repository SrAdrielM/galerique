import React from "react";
import '../styles/CarritoCompra.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";
import Imagen from "../imgs/acuarela.png";

function CarritoCompra() {
  return (
    <>
      <Navbar />
      <MainMenu />

      <div className="titulo">
        <h2>Artículos agregados al carrito de compra</h2>
      </div>

      <div className="cards-container">
        {[1, 2, 3].map((_, i) => (
          <a href="#" className="card-link" key={i}>
            <div className="card">
              <div className="card-image">
                <img src={Imagen} alt={`Obra ${i + 1}`} />
              </div>
              <div className="card-content">
                <h4 className="card-title">Título de la obra {i + 1}</h4>
                <p className="card-description">
                  Descripción general de la obra número {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="card-price">Precio: ${99 + i * 10}.00</div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default CarritoCompra;

