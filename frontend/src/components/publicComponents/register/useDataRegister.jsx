import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataRegister = () => {
    const ApiBuyers="http://localhost:4000/api/buyer";

    const [fullName, setFullName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [accountDate, setAccountDate] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [buyers, setBuyers] = useState([]);

    const getCurrentDate = () => new Date().toISOString();

    const cleanData = () => {
    setFullName("");
    setProfilePic("");
    setUserName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAccountDate(""); 
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !profilePic || !userName || !email || !password || !phone) {
        setError("Todos los campos son obligatorios");
        toast.error("Todos los campos son obligatorios");
        return;
    }

    try {
        const newBuyer = {
        fullName,
        profilePic,
        userName,
        email,
        password,
        phone,
        accountDate: getCurrentDate(),
        };

        const response = await fetch(ApiBuyers, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBuyer),
        });

        if (!response.ok) {
        throw new Error("Hubo un error al registrar el comprador");
        }

        const data = await response.json();
        toast.success("Comprador registrado correctamente");
        setBuyers(data);
        setSuccess("Comprador registrado correctamente");
        cleanData();
        fetchData();
    } catch (error) {
        setError(error.message);
        console.error("Error:", error);
        toast.error("Ocurrió un error al registrar el comprador");
    } finally {
        setLoading(false);
    }
    };

    return {
        fullName,
        setFullName,
        profilePic,
        setProfilePic,
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        phone,
        setPhone,
        handleSubmit,
        cleanData,
        getCurrentDate
    }
}

export default useDataRegister;