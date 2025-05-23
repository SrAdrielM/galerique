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
          {user.name} {user.lastName}
        </h2>
        <p className="card-info"><span>Email:</span> {user.email}</p>
        <p className="card-info"><span>Teléfono:</span> {user.telephone}</p>
        <p className="card-info"><span>Fecha de nacimiento:</span> {user.birthday}</p>
        <p className="card-info"><span>DUI:</span> {user.dui}</p>

        <div className="card-buttons">
          <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};


export default UsersCard;