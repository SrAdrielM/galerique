import React, { useEffect } from "react";
import ListUsers from "../../components/AdminComponents/Users/ListUsers";
import useDataUser from "../../components/AdminComponents/Users/hooks/useDataUsers";

import "../../styles/adminStyles/allUsers.css";

const Users = () => {
  useEffect(() => {
    document.title = "Usuarios";
  }, []);

  const {
    loading,
    users,
    handleDelete,
  } = useDataUser();

  return (
    <div className="users-page">
      <div className="users-content">
        <h1 className="users-title">Usuarios</h1>
        <div className="tab-buttons">
          <button className="tab-button active">Lista de usuarios</button>
        </div>
        <div className="tab-content">
          <ListUsers
            loading={loading}
            users={users}
            deleteUser={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
