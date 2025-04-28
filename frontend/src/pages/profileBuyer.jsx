import React from "react";
import '../styles/profileBuyer.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";
import imgTotal from "../imgs/imgTotal.png"

function profileBuyer() {
    return(
        <>
        
        <Navbar />
        <MainMenu />

        <div id="container">
            <div id="box">
                <div id="subBox1">
                    <img src={imgTotal}/>
                    <div id="texts">
                        <p style={{fontSize:"25px", fontWeight:"bold"}}>Nombre.de.usuario</p>
                        <p>correoelect@gmail.com</p>
                    </div>
                </div>
                <div id="subBox2">
                    <section>
                        <p style={{fontSize:"22px"}}>Vive en:</p>
                        <p style={{fontSize:"18px", color:"#444444"}}>Ciudad, Pais</p>
                    </section>
                    <section>
                        <p style={{fontSize:"22px"}}>Se unio a Galerique el:</p>
                        <p style={{fontSize:"18px", color:"#444444"}}>dd/mm/aaaa</p>
                    </section>
                    <section>
                        <p style={{fontSize:"22px"}}>Corrientes favoritas:</p>
                        <ul style={{fontSize:"18px", color:"#444444"}}>
                            <li>- corriente 1</li>
                            <li>- corriente 2</li>
                            <li>- corriente 3</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

        <Footer/>
        
        </>
    )
}

export default profileBuyer;