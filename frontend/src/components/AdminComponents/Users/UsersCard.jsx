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
        <h3 id="username">{user.userName}</h3>
        <div id="infoContainer">
          <div>
            <p className="labelText">Email:</p><p className="card-info">{user.email}</p>
          </div>
          <div>
            <p className="labelText">Contraseña:</p><p className="card-info">{user.password}</p>
          </div>
          <div>
            <p className="labelText">Telefono:</p><p className="card-info">{user.phone}</p>
          </div>
          <div>
            <p className="labelText">id:</p><p className="card-info">{user._id}</p>
          </div>
        </div>
      </div>
      <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
        Eliminar cuenta
      </button>
    </div>
  );
};


export default UsersCard;