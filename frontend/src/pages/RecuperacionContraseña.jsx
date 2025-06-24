import React, { useEffect } from "react";
import useDataPassRecovery from "../components/publicComponents/useDataPassRecovery";

const PasswordRecovery = () => {
  useEffect(() => {
    document.title = "Recuperación de contraseña";
  }, []);

  const {
    activeTab,
    email,
    setEmail,
    code,
    setCode,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
    loading,
  } = useDataPassRecovery();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Recuperación de contraseña</h1>

        {activeTab === "requestCode" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-gray-700">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Ingrese su correo electrónico"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {loading ? "Enviando..." : "Enviar código"}
            </button>
          </form>
        )}

        {activeTab === "verifyCode" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-gray-700">Código de verificación</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Ingrese el código recibido"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {loading ? "Verificando..." : "Verificar código"}
            </button>
          </form>
        )}

        {activeTab === "newPassword" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-gray-700">Nueva contraseña</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Ingrese nueva contraseña"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Confirme nueva contraseña"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              {loading ? "Actualizando..." : "Actualizar contraseña"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PasswordRecovery;
