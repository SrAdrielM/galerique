import React from "react";
import '../styles/SobreNos.css';
import Vector2 from '../imgs/Vector2.png';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";

function SobreNos() {
  return (
    <>
      <Navbar />
      <MainMenu />
     

      <div className="cuerpo">
        <h2 class="titulo1">
        Sobre nosotros
        </h2>
        <p class="parrafo">La idea del emprendimiento surgió como una posibilidad creativa de crear un sitio de compra y venta enfocado específicamente en obras originales de artistas no reconocidos, y así poder apoyar a estos artistas a vender sus obras, y, a las personas que aprecian el arte, a poder adquirir distintos tipos de arte desde su casa y con un proceso mas ágil y fácil de comprender. </p>
      
        <div class="titulo2">
        <h1>Nuestro equipo</h1>
      </div>

      <div class="container-sn">
        <div class="card-sn">
            <div class="card-image-sn"></div>
            <div class="card-content-sn">
                <div class="card-title-sn">Coordinador</div>
                <div class="card-name-sn">Kevin Portillo</div>
            </div>
        </div>
        
        <div class="card-sn">
            <div class="card-image-sn"></div>
            <div class="card-content-sn">
                <div class="card-title-sn">Plataforma</div>
                <div class="card-name-sn">Adriel moreno</div>
            </div>
        </div>
        
        <div class="card-sn">
            <div class="card-image-sn"></div>
            <div class="card-content-sn">
                <div class="card-title-sn">Marketing</div>
                <div class="card-name-sn">Franklin Reyes</div>
            </div>
        </div>
    </div>
      </div>


      <div></div>
      

      <Footer />
    </>
  );
}

export default SobreNos;
