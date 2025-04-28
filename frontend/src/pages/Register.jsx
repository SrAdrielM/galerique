import React, { useState } from "react";
import '../styles/Register.css';
import googleIcon from "../imgs/googleLogo.png";
import { useNavigate } from 'react-router-dom';

function Register() {
  const [birthDate, setBirthDate] = useState({
    day: "01",
    month: "Enero",
    year: "2001"
  });

  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-form-container">
        <div className="register-form">
          <h1 className="register-title">Registro</h1>
          
          <div className="input-group">
            <label className="text-black">Nombre completo</label>
            <input type="text" className="register-input" placeholder="Nombre completo" />
          </div>
          
          <div className="input-group">
            <label className="text-black">Nombre de Usuario</label>
            <input type="text" className="register-input" placeholder="Nombre de Usuario" />
          </div>
          
          <div className="input-group">
            <label className="text-black">Correo electrónico</label>
            <input type="email" className="register-input" placeholder="Correo electrónico" />
          </div>
          
          <div className="input-group">
            <label className="text-black">Fecha de nacimiento</label>
            <div className="date-inputs">
              <div className="select-container">
                <select 
                  className="date-select"
                  value={birthDate.day}
                  onChange={(e) => setBirthDate({ ...birthDate, day: e.target.value })}
                >
                  {Array.from({ length: 31 }, (_, i) => {
                    const day = String(i + 1).padStart(2, '0');
                    return <option key={day} value={day}>{day}</option>;
                  })}
                </select>
                <div className="select-arrows"></div>
              </div>

              <div className="select-container">
                <select 
                  className="date-select"
                  value={birthDate.month}
                  onChange={(e) => setBirthDate({ ...birthDate, month: e.target.value })}
                >
                  {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
                    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <div className="select-arrows"></div>
              </div>

              <div className="select-container">
                <select 
                  className="date-select"
                  value={birthDate.year}
                  onChange={(e) => setBirthDate({ ...birthDate, year: e.target.value })}
                >
                  {Array.from({ length: 100 }, (_, i) => {
                    const year = 2024 - i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </select>
                <div className="select-arrows"></div>
              </div>
            </div>
          </div>

          <div className="password-container">
            <div className="input-group password-group">
              <label className="text-black">Nueva contraseña</label>
              <input type="password" className="register-input" placeholder="Nueva contraseña" />
            </div>

            <div className="input-group password-group">
              <label className="text-black">Confirmar contraseña</label>
              <input type="password" className="register-input" placeholder="Confirmar contraseña" />
            </div>
          </div>

          <button className="register-btn" onClick={() => navigate('/')}>
            Registrarse
          </button>

          <button className="google-register-btn">
            <img src={googleIcon} alt="Google" className="google-icon" />
            <span>Registrarse con Google</span>
          </button>
        </div>
      </div>

      <div className="art-collage">
        <h1 className="brand-name">Galerique</h1>
      </div>
    </div>
  );
}

export default Register;
