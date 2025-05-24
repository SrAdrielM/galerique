import React from "react";
import useDataUser from "../Users/hooks/useDataUsers";
import "./usersStyles.css"

const UsersCard = ({ user, deleteUser }) => {
  if (!user) {
    return <div className="card-loading">Cargando...</div>;
  }

  return (
    <div className="card-container">
      <div className="card-content">
        <h2 className="card-title">
          {user.fullName}
        </h2>
        <h3>{user.userName}</h3>
        <div id="infoContainer">
            <p className="card-info"><span>Email:</span> {user.email}</p>
            <p className="card-info"><span>Contraseña:</span> {user.password}</p>
            <p className="card-info"><span>Telefono:</span> {user.phone}</p>
            <p className="card-info"><span>id:</span> {user._id}</p>
        </div>
      </div>
      <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
        Eliminar
      </button>
    </div>
  );
};


export default UsersCard;