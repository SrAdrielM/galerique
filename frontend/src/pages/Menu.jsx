import { useState } from 'react';
import Navbar from "../components/Navbar";
import MainMenu from "../components/MainMenu";
import CategorySlider from "../components/CategorySlider.jsx";
import Footer from "../components/Footer";
import Retratos from "../imgs/retratos.png";
import Paisajes from "../imgs/paisajes.png";
import Contenporaneo from "../imgs/contenporaneo.png";
import Abstracto from "../imgs/abstracto.png";
import Realismo from "../imgs/realismo.png";
import Impresionismo from "../imgs/impresionismo.png";
import Oleo from "../imgs/oleo.png";
import Acuarela from "../imgs/acuarela.png";
import Acrilico from "../imgs/acrilico.png";
import Pastel from "../imgs/pastel.png";
import Mixta from "../imgs/mixta.png";
import Grafito from "../imgs/grafito.png";

function Menu() {
  const categoryItems = [
    {
      imageUrl: Retratos, 
      title: "Retratos"
    },
    {
      imageUrl: Paisajes,
      title: "Paisajes"
    },
    {
      imageUrl: Contenporaneo,
      title: "Contemporáneo"
    },
    {
      imageUrl: Abstracto,
      title: "Abstracto"
    },
    {
      imageUrl: Realismo,
      title: "Realismo"
    },
    {
      imageUrl: Impresionismo,
      title: "Impresionismo"
    }
  ];
  
  const techniqueItems = [
    {
      imageUrl: Oleo,
      title: "Óleo"
    },
    {
      imageUrl: Acuarela,
      title: "Acuarela"
    },
    {
      imageUrl: Acrilico,
      title: "Acrílico"
    },
    {
      imageUrl: Pastel,
      title: "Pastel"
    },
    {
      imageUrl: Mixta,
      title: "Mixta"
    },
    {
      imageUrl: Grafito,
      title: "Grafito"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MainMenu />
      
      <main className="flex-grow">
        <CategorySlider 
          title="Explora según categoría" 
          items={categoryItems} 
        />
        <CategorySlider 
          title="Explora según técnica" 
          items={techniqueItems} 
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default Menu;