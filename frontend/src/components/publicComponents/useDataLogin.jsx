import { useState } from "react";

const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Para enviar y recibir cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.message?.includes("Inicio sesion")) {
        const tipo = data.message.split(": ")[1];
        return tipo;
      } else {
        setError(data.message || "Error al iniciar sesión");
        return null;
      }
    } catch (err) {
      console.error(err);
      setError("Error del servidor");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};

export default useLogin;
