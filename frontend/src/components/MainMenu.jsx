import { useNavigate } from 'react-router-dom'; 

function MainMenu() {

  const navigate = useNavigate(); 

    return (
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto flex space-x-10 px-4">
          <a href="#" className="py-4 text-gray-600 hover:text-gray-900" onClick={() => navigate('/')}>Inicio</a>
          <a href="#" className="py-4 text-gray-600 hover:text-gray-900" onClick={() => navigate('/cuadros')}>Cuadros</a>
          <a href="#" className="py-4 text-gray-600 hover:text-gray-900">Sobre Nostros</a>
          <a href="#" className="py-4 text-gray-600 hover:text-gray-900">Contactanos</a>
        </div>
      </div>
    );
  }
  
  export default MainMenu;