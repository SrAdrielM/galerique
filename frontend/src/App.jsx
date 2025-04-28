import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Menu from './pages/Menu';
import CarritoCompra from './pages/CarritoCompra';
import Login from './pages/LogIn'
import Cuadros from './pages/Cuadros';
import SobreNos from './pages/SobreNos';
import ProfileBuyer from './pages/profileBuyer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<CarritoCompra />} />
        <Route path="/cuadros" element={<Cuadros />} />
        <Route path="/SobreNos" element={<SobreNos />} />
        <Route path="/profileB" element={<ProfileBuyer/>} />

      </Routes>
    </Router>
  );
}

export default App
