import { useState, useEffect } from "react";
import toast from 'react-hot-toast';

const useDataUsers = () => {
    const ApiBuyers = "http://localhost:4000/api/buyer";
    const ApiSellers = "http://localhost:4000/api/seller";

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener y combinar los usuarios
    const fetchUsers = async () => {
        setLoading(true);
        setError(null);

        try {
            const [buyersRes, sellersRes] = await Promise.all([
                fetch(ApiBuyers),
                fetch(ApiSellers)
            ]);

            if (!buyersRes.ok || !sellersRes.ok) {
                throw new Error("Error al obtener usuarios");
            }

            const buyers = await buyersRes.json();
            const sellers = await sellersRes.json();

            const buyersWithRole = buyers.map(user => ({ ...user, role: "buyer" }));
            const sellersWithRole = sellers.map(user => ({ ...user, role: "seller" }));

            setUsers([...buyersWithRole, ...sellersWithRole]);
        } catch (err) {
            setError(err.message);
            toast.error("Error al cargar usuarios");
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

    // Función para eliminar usuarios según su rol
    const deleteUser = async (id, role) => {
        const endpoint = role === "buyer" ? ApiBuyers : ApiSellers;

        try {
            const res = await fetch(`${endpoint}/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("No se pudo eliminar el usuario");
            }

            toast.success("Usuario eliminado correctamente");
            setUsers(prev => prev.filter(user => user._id !== id));
        } catch (err) {
            toast.error("Error al eliminar el usuario");
            console.error("Error al eliminar:", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        users,
        loading,
        error,
        deleteUser,
        fetchUsers,
    };
};

export default useDataUsers;
