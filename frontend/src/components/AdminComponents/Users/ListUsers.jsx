import React from "react";
import UsersCard from "./UsersCard";
import useDataUser from "./hooks/useDataUsers";
import "./usersStyles.css"

const ListUsers = () => {
  const { users, loading, handleDelete } = useDataUser();

  return (
    <>
      <h1 className="list-title">Listado de Usuarios</h1>
      <div className="list-container">
        {loading && <div className="card-loading">Cargando...</div>}

        {users.map((user) => (
          <UsersCard
            key={user._id}
            user={user}
            deleteUser={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ListUsers;