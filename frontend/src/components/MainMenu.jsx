import { useNavigate } from 'react-router-dom';
import "../styles/componentStyles/MainMenu.css"

function MainMenu() {

  const navigate = useNavigate(); 

    return (
      <div className="topbar">
        <div className="topbar-container">
          <a href="#" className="topbar-link" onClick={() => navigate('/')}>Inicio</a>
          <a href="#" className="topbar-link">Cuadros</a>
          <a href="#" className="topbar-link" onClick={() => navigate('/SobreNos/')}>Sobre Nosotros</a>
          <a href="#" className="topbar-link">Contáctanos</a>
        </div>
      </div>
    );
  }
  
  export default MainMenu;