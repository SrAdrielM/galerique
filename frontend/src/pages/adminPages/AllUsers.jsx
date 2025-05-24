import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import MainMenu from "../../components/MainMenu";
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
    <>
    <Navbar />
    <MainMenu />
    <div className="users-page">
        <h1 className="users-title">Usuarios</h1>
        <div className="users-content">
        <div className="tab-content">
          <ListUsers
            loading={loading}
            users={users}
            deleteUser={handleDelete}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Users;
