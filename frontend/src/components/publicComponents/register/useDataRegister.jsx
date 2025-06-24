import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useDataRegister = () => {
  const ApiBuyers = "http://localhost:4000/api/buyer";
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentDate = () => new Date().toISOString();

  const cleanData = () => {
    setFullName("");
    setProfilePic(null);
    setProfilePreview(null);
    setUserName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setConfirmPassword("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Solo se permiten archivos de imagen");
        return;
      }
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

    if (!fullName || !userName || !email || !password || !phone) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      toast.error("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("profilePic", profilePic);
      formDataToSend.append("fullName", fullName);
      formDataToSend.append("userName", userName);
      formDataToSend.append("email", email);
      formDataToSend.append("password", password);
      formDataToSend.append("phone", phone);
      formDataToSend.append("accountDate", getCurrentDate());

      console.log("Datos a enviar:");
      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }

      const response = await fetch(ApiBuyers, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();

        if (response.status === 409) {
            toast.error(errorData.message || "Correo o usuario ya en uso");
            setError(errorData.message);
        } else {
            toast.error("Hubo un error al registrar el comprador");
            setError("Error al registrar el comprador");
        }

        return;
    }

      const data = await response.json();
      toast.success("Comprador registrado correctamente");
      setSuccess("Comprador registrado correctamente");

      cleanData();
      setTimeout(() => {
        navigate("/");
      }, 1500);
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
    confirmPassword,
    setConfirmPassword,
    phone,
    setPhone,
    handleSubmit,
    handleImageChange,
    cleanData,
    loading,
    error,
    success,
  };
};

export default useDataRegister;
