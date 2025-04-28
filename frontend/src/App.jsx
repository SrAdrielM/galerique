import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Menu from './pages/Menu';
import CarritoCompra from './pages/CarritoCompra';
import Login from './pages/LogIn'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<CarritoCompra />} />
      </Routes>
    </Router>
  );
}

export default App
