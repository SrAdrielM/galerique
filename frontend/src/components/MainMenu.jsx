import { useNavigate } from 'react-router-dom';
import "../styles/componentStyles/MainMenu.css";

function MainMenu() {
  const navigate = useNavigate(); 
  const userType = localStorage.getItem("userType");

  const goToUsers = () => {
    if (userType === "admin") {
      navigate('/AllUsers');
    } else {
      alert("Acceso restringido: solo para administradores.");
    }
  };

  return (
    <div className="topbar">
      <div className="topbar-container">
        <a href="#" className="topbar-link" onClick={() => navigate('/')}>Inicio</a>
        <a href="#" className="topbar-link" onClick={() => navigate('/Cuadros')}>Cuadros</a>
        <a href="#" className="topbar-link" onClick={() => navigate('/SobreNos')}>Sobre Nosotros</a>
        <a href="#" className="topbar-link">Contáctanos</a>

        {/* 👇 Solo visible si es admin */}
        {userType === "admin" && (
          <a href="#" className="topbar-link" onClick={goToUsers}>Usuarios</a>
        )}
      </div>
    </div>
  );
}

export default MainMenu;
