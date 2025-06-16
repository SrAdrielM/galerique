import React from "react";
import "../styles/Register.css"
import { useNavigate } from "react-router-dom";
import googleIcon from "../imgs/googleLogo.png"; // Asegúrate de que la ruta sea correcta
import useDataRegister from "../components/publicComponents/register/useDataRegister"; // Ruta al hook

const Register = () => {
  const navigate = useNavigate();
  const {
    fullName,
    setFullName,
    profilePic,
    setProfilePic,
    profilePreview,
    setProfilePreview,
    handleImageChange,
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    handleSubmit,
  } = useDataRegister();

  return (
    <div className="register-container">
      <form className="register-form-container" onSubmit={handleSubmit}>
        <div className="register-form">
          <h1 className="register-title">Registro</h1>

          <div className="input-group">
            <label className="rg-text-black">Nombre completo</label>
            <input
              type="text"
              className="register-input"
              placeholder="Nombre completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="rg-text-black">Nombre de Usuario</label>
            <input
              type="text"
              className="register-input"
              placeholder="Nombre de Usuario"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="rg-image-section">
            <p>Elige una foto de perfil</p>
            <div className="rg-image-upload">
              <label htmlFor="image" className="rg-image-upload-label">
                {profilePreview ? (
                  <img src={profilePreview} alt="Vista previa" className="rg-image-preview" />
                ) : (
                  <div className="rg-upload-placeholder">
                    <span>Elegir una foto</span>
                  </div>
                )}
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label className="rg-text-black">Correo electrónico</label>
            <input
              type="email"
              className="register-input"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="rg-text-black">Número de teléfono</label>
            <input
              type="text"
              className="register-input"
              placeholder="Número de teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="password-container">
            <div className="input-group password-group">
              <label className="rg-text-black">Nueva contraseña</label>
              <input
                type="password"
                className="register-input"
                placeholder="Nueva contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-group password-group">
              <label className="rg-text-black">Confirmar contraseña</label>
              <input
                type="password"
                className="register-input"
                placeholder="Confirmar contraseña"
                // Este input es visual, pero se puede validar al comparar con `password`
              />
            </div>
          </div>

          <button type="submit" className="register-btn">
            Registrarse
          </button>

          <button type="button" className="google-register-btn">
            <img src={googleIcon} alt="Google" className="google-icon" />
            <span>Registrarse con Google</span>
          </button>
        </div>
      </form>

      <div className="art-collage">
        <h1 className="brand-name">Galerique</h1>
      </div>
    </div>
  );
};

export default Register;
