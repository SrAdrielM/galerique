import React, { useEffect } from "react";
import NavBar from "./Navbar";
import MainMenu from "./MainMenu";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "../context/AuthContext";

import Register from '../pages/Register';
import Menu from '../pages/Menu';
import CarritoCompra from '../pages/CarritoCompra';
import Login from '../pages/LogIn';
import Cuadros from '../pages/Cuadros';
import SobreNos from '../pages/SobreNos';
import ProfileBuyer from '../pages/profileBuyer';
import AllUsers from "../pages/adminPages/AllUsers";
import AgregarPintura from '../pages/AgregarPintura';

function Navegation() {
    const { authCokie } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authCokie) {
      navigate("/menu");
    }
  }, [authCokie]);

  return(
    <>

    <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<PrivateRoute />}>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/allUsers" element={<AllUsers />} />
            <Route path="/register" element={<Register />} />
            <Route path="/carrito" element={<CarritoCompra />} />
            <Route path="/cuadros" element={<Cuadros />} />
            <Route path="/sobrenos" element={<SobreNos />} />
        </Route>        
      </Routes>

    </>
  )
};

export default Navegation;