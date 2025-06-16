import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataRegister = () => {
    const ApiBuyers="http://localhost:4000/api/buyer";

    const [fullName, setFullName] = useState("");
    const [profilePic, setProfilePic] = useState(null);
    const [profilePreview, setProfilePreview] = useState(null);
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setProfilePic(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfilePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !profilePic || !userName || !email || !password || !phone) {
        setError("Todos los campos son obligatorios");
        toast.error("Todos los campos son obligatorios");
        return;
    }

    try {
        const formDataToSend = new FormData();
        formDataToSend.append('profilePic', profilePic);
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('size', formData.size);
        // formDataToSend.append('sellerId', formData.sellerId); // Comentado temporalmente
        formDataToSend.append('techniqueId', formData.techniqueId);
        formDataToSend.append('categoriesId', formData.categoriesId);

        // Debug: mostrar datos que se van a enviar
        console.log('Datos a enviar:');
        for (let [key, value] of formDataToSend.entries()) {
            console.log(key, value);
        }

        const response = await fetch(ApiBuyers, {
            method: 'POST',
            body: formDataToSend
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
        profilePreview,
        setProfilePreview,
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        phone,
        setPhone,
        handleSubmit,
        handleImageChange,
        cleanData,
        getCurrentDate
    }
}

export default useDataRegister;