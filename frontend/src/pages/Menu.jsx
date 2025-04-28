import { useState } from 'react';
import Navbar from "../components/Navbar";
import MainMenu from "../components/MainMenu";
import CategorySlider from "../components/CategorySlider";
import Footer from "../components/Footer";
import Retratos from "../imgs/retratos.png";
import Paisajes from "../imgs/paisajes.png";
import Contenporaneo from "../imgs/contenporaneo.png";
import Abstracto from "../imgs/abstracto.png";
import Realismo from "../imgs/realismo.png";
import Impresionismo from "../imgs/impresionismo.png";

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
      title: "Abstracto"
    },
    {
      imageUrl: Abstracto,
      title: "Contemporáneo"
    },
    {
      imageUrl: Realismo,
      title: "Impresionismo"
    },
    {
      imageUrl: Impresionismo,
      title: "Realismo"
    }
  ];
  
  const techniqueItems = [
    {
      imageUrl: "/images/technique1.jpg",
      title: "Óleo"
    },
    {
      imageUrl: "/images/technique2.jpg",
      title: "Acuarela"
    },
    {
      imageUrl: "/images/technique3.jpg",
      title: "Acrílico"
    },
    {
      imageUrl: "/images/technique4.jpg",
      title: "Pastel"
    },
    {
      imageUrl: "/images/technique5.jpg",
      title: "Mixta"
    },
    {
      imageUrl: "/images/technique6.jpg",
      title: "Digital"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MainMenu />
      
      <main className="flex-grow">
        <CategorySlider title="Explora segun categoria" items={categoryItems} />
        <CategorySlider title="Explora segun tecnica" items={techniqueItems} />
      </main>
      
      <Footer />
    </div>
  );
}

export default Menu;