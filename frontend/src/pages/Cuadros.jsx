import React from "react";
import '../styles/Cuadros.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";
import CuadroAbstracto from "../imgs/cuadro-abstracto.png";
import CuadroPaisaje from "../imgs/cuadro-paisaje.png";
import CuadroModerno from "../imgs/cuadro-moderno.png";
import CuadroRetrato from "../imgs/cuadro-retrato.png";

function Cuadros() {
  const cuadrosData = [
    {
      id: 1,
      titulo: "Abstracción en Colores",
      descripcion: "Una obra abstracta que explora la armonía de colores vibrantes y formas dinámicas.",
      precio: 185.00,
      imagen: CuadroAbstracto,
      artista: "Gabriel Martínez"
    },
    {
      id: 2,
      titulo: "Paisaje de Montaña",
      descripcion: "Hermoso paisaje que captura la esencia de las montañas al amanecer con tonos cálidos.",
      precio: 210.00,
      imagen: CuadroPaisaje,
      artista: "Luisa Fernández"
    },
    {
      id: 3,
      titulo: "Expresión Moderna",
      descripcion: "Una pieza contemporánea que juega con la textura y el espacio negativo.",
      precio: 175.00,
      imagen: CuadroModerno,
      artista: "Carlos Méndez"
    },
    {
      id: 4,
      titulo: "Retrato Clásico",
      descripcion: "Un retrato al estilo tradicional con técnicas modernas de iluminación y composición.",
      precio: 225.00,
      imagen: CuadroRetrato,
      artista: "Elena Suárez"
    }
  ];

  return (
    <>
      <Navbar />
      <MainMenu />

      <div className="titulo-cuadros">
        <h2>Nuestra Colección de Cuadros</h2>
      </div>

      <div className="filtros-container">
        <div className="filtro">
          <label>Estilo:</label>
          <select>
            <option value="">Todos</option>
            <option value="abstracto">Abstracto</option>
            <option value="paisaje">Paisaje</option>
            <option value="retrato">Retrato</option>
            <option value="moderno">Arte Moderno</option>
          </select>
        </div>
        <div className="filtro">
          <label>Precio:</label>
          <select>
            <option value="">Todos</option>
            <option value="bajo">Hasta $150</option>
            <option value="medio">$150 - $200</option>
            <option value="alto">Más de $200</option>
          </select>
        </div>
        <div className="filtro">
          <label>Artista:</label>
          <select>
            <option value="">Todos</option>
            <option value="gabriel">Gabriel Martínez</option>
            <option value="luisa">Luisa Fernández</option>
            <option value="carlos">Carlos Méndez</option>
            <option value="elena">Elena Suárez</option>
          </select>
        </div>
      </div>

      <div className="cuadros-container">
        {cuadrosData.map((cuadro) => (
          <div className="cuadro-card" key={cuadro.id}>
            <div className="cuadro-image">
              <img src={cuadro.imagen} alt={cuadro.titulo} />
            </div>
            <div className="cuadro-info">
              <h3 className="artist-name">{cuadro.artista}</h3>
              <h4 className="cuadro-title">{cuadro.titulo}</h4>
              <p className="cuadro-description">{cuadro.descripcion}</p>
              <div className="cuadro-price">${cuadro.precio.toFixed(2)} us$</div>
              <button className="btn-agregar">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>

      <div className="paginacion">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">→</button>
      </div>

      <Footer />
    </>
  );
}

export default Cuadros;