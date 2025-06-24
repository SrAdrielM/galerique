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
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userType", data.tipo || "buyer");
        localStorage.setItem("user", JSON.stringify({ email }));
        return { success: true, tipo: data.tipo };
      } else {
        setError(data.message || "Credenciales incorrectas");
        return { success: false };
      }
    } catch (err) {
      setError("Error del servidor");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};

export default useLogin;
