import React, { useState, useEffect } from "react";
import '../styles/Login.css';
import useLogin from "../components/publicComponents/useDataLogin";
import googleIcon from "../imgs/googleLogo.png";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Login = () => {

  useEffect(() => {
    document.title = "Iniciar Sesión";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useLogin();
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tipoUsuario = await login(email, password);

    if (tipoUsuario) {
      console.log("Usuario autenticado como:", tipoUsuario);
      localStorage.setItem("userType", tipoUsuario);
      navigate("/menu")
    }
    
  };

  return (
    <div className="login-container">
      <div className="art-collage">
        <h1 className="brand-name">Galerique</h1>
      </div>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">Acesso</h1>
          
          <div className="input-group">
            <label>Correo</label>
            <input
            className="login-input"  
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          </div>
          
          <div className="input-group">
            <label>Contraseña</label>
            <input 
            className="login-input" 
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          </div>
          
          <button className="continue-btn" type="submit" disabled={loading}>
            {loading ? "Verificando..." : "Ingresar"}
          </button>
          
          <div className="forgot-password">
            <a onClick={() => navigate('/passwordRecovery')}>Olvide mi contraseña</a>
          </div>
          
          <button className="google-login-btn">
            <img src={googleIcon} alt="Google" className="google-icon" />
            <span>Continuar con Google</span>
          </button>
          
          <div className="divider">
            <span>o</span>
          </div>
          
          <div className="register-prompt">
            ¿No tienes cuenta? <a onClick={() => navigate('/register')}>Registrate aquí</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;