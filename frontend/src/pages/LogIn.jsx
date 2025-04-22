import React from "react";
import '../styles/Login.css'
import googleLogo from "../imgs/googleLogo.png"

function LogIn() {

  return (
    <>
      <div id="container">
        <div id="box1">
            <img src=""/>
        </div>
        <div id="box2">
            <section id="sect1">
                <h1>Acceso</h1>
                <p>Correo o nombre de usuario</p>
                <input type="text" />
                <p>Contraseña</p>
                <input type="password" />
                <div id="subBox">
                  <p id="recuContra">Olvide mi contraseña</p>
                  <a id="btnAcess" href="#">Acceder</a>
                </div>
            </section>
            <section id="sect2">
                <div id="imgCont">
                    <img src={googleLogo} alt="" />
                </div>
                <p>Continuar con google</p>
            </section>
            <div id="separador"><p>O</p></div>
            <section id="sect3">
                <p>¿Aun no tienes cuenta?, <span>Registrate aqui</span>.</p>
            </section>
        </div>
      </div>
    </>
  )
}

export default LogIn