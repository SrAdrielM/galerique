import React from "react";
import '../styles/Login.css';
import googleIcon from "../imgs/googleLogo.png";
import { useNavigate } from 'react-router-dom';

function LogIn() {

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="art-collage">
        <h1 className="brand-name">Galerique</h1>
      </div>

    
      <div className="login-form-container">
        <div className="login-form">
          <h1 className="login-title">Acesso</h1>
          
          <div className="input-group">
            <label>Correo o Nombre de usuario</label>
            <input type="text" className="login-input" />
          </div>
          
          <div className="input-group">
            <label>Contraseña</label>
            <input type="password" className="login-input" />
          </div>
          
          <button className="continue-btn" onClick={() => navigate('/')}>Continuar</button>
          
          <div className="forgot-password">
            <a href="#">Olvide mi contraseña</a>
          </div>
          
          <button className="google-login-btn">
            <img src={googleIcon} alt="Google" className="google-icon" />
            <span>Continuar con Google</span>
          </button>
          
          <div className="divider">
            <span>o</span>
          </div>
          
          <div className="register-prompt">
            ¿No tienes cuenta? <a href="#">Registrate aquí</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;