import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Menu from './pages/Menu';
import CarritoCompra from './pages/CarritoCompra';
import Login from './pages/LogIn'
<<<<<<< HEAD
import Cuadros from './pages/Cuadros';
=======
import SobreNos from './pages/SobreNos';

>>>>>>> 6e23541ddcc890ae90e9d7652c997460d5deee09

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<CarritoCompra />} />
<<<<<<< HEAD
        <Route path="/cuadros" element={<Cuadros />} />
=======
        <Route path="/SobreNos" element={<SobreNos />} />
>>>>>>> 6e23541ddcc890ae90e9d7652c997460d5deee09
      </Routes>
    </Router>
  );
}

export default App
