import React, { useState } from "react";
import '../styles/Start.css';

function Start() {
    const [posicion, setPosicion] = useState(0);

    const items = [1, 2, 3, 4, 5, 6, 7, 8];
    const itemWidth = 25;
    const maxPos = items.length - 4;

    const moverAdelante = () => {
        if (posicion < maxPos) setPosicion(posicion + 1);
    };

    const moverAtras = () => {
        if (posicion > 0) setPosicion(posicion - 1);
    };

    const desplazamiento = -posicion * itemWidth;

    return (
        <div id="container">
            <div id="box1">
                <h1>Explora según categoría</h1>
                
                <div className="carrusel-container">
                <button onClick={moverAtras}>◀</button>
                    <div
                        className="carrusel"
                        style={{ transform: `translateX(${desplazamiento}%)` }}
                    >
                        {items.map((item, index) => (
                            <div className="item" key={index}>{item}</div>
                        ))}
                    </div>
                <button onClick={moverAdelante}>▶</button>
                </div>
            </div>
        </div>
    );
}

export default Start;
