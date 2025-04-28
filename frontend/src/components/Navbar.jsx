import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Logo from "../imgs/logo.png";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex-shrink-0 mr-6">
          <img 
            src={Logo}
            alt="Galerique" 
            className="h-15" 
          />
        </div>

        <div className="flex-1 flex items-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-full text-gray-800"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-3 top-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 ml-4">
          {/* Icono de perfil */}
          <button className="hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          {/* Icono del carrito */}
          <button className="hover:text-gray-300" onClick={() => navigate('/carrito')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          <button 
            className="bg-white text-gray-800 px-4 py-1 rounded hover:bg-gray-200"
            onClick={() => navigate('/login')} 
          >
            Iniciar Sesión
          </button>

          <button 
            className="border border-white px-4 py-1 rounded hover:bg-gray-700"
            onClick={() => navigate('/register')} 
          >
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

