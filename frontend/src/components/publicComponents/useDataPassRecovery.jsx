import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';

const useDataPassRecovery = () => {
    const ApiProducts = "https://proyectomern2b-wu9z.onrender.com/api/products"

    const [activeTab, setActiveTab] = useState("list"); 
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [errorProduct, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const cleanData = () => {
        setName("");
        setDescription("");
        setPrice("");
        setStock("");
        setId("");
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
          !name ||
          !description ||
          !price ||
          !stock
        ) {
            setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
            return;
        }

        try {
            const newProduct = {
                name,
                description,
                price,
                stock
            };

            console.log(newProduct, "datos nuevo Producto");

            const response = await fetch(ApiProducts, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error("Hubo un error al registrar un nuevo producto");
            }

            const data = await response.json();
            toast.success("Producto registrado");
            setProducts(data);
            setSuccess("Producto registrado correctamente");
            cleanData();
            fetchData();
        } catch (error) {
            setError(error.message);
            console.error("Error:", error);
            alert("Error", "Ocurrió un error al registrar el producto");
            toast.error('Ocurrió un error al registrar el producto');
        } finally {
          setLoading(false);
          }
        };

        const fetchData = async () => {
            try {
                const response = await fetch(ApiProducts);
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log(data);
                setProducts(data);
              } catch (error) {
                console.error("Error fetching data:", error);
              } finally {
                setLoading(false);
              }
        };

        useEffect(() => {
            fetchData();
          }, []);

        const deleteProduct = async (id) => {
        try {
            const response = await fetch(
              `${ApiProducts}/${id}`,
              {
                method: "DELETE",
                body: JSON.stringify(deleteProduct),
              }
            );
        
            if (!response.ok) {
              throw new Error("Failed to delete product");
            }
        
            const result = await response.json();
            console.log("Deleted:", result);
            toast.success('Producto eliminado');
            // Actualizar la lista después de borrar
            setProducts((prev) => prev.filter(emp => emp._id !== id));
            fetchData();
        } catch (error) {
              console.error("Error deleting product sfs:", error);
            }
        };

        const updateProduct = async (dataProducts) => {
            setId(dataProducts._id);
            setName(dataProducts.name);
            setDescription(dataProducts.description);
            setPrice(dataProducts.price);
            setStock(dataProducts.stock);
            setError(null);
            setSuccess(null);
            setActiveTab("form");
        }

        const handleUpdate = async (e) => {
            e.preventDefault();

            try {
                const updateProduct = {
                    name,
                    description,
                    price,
                    stock
                };

            const response  = await fetch(
            `${ApiProducts}/${id}`,

            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateProduct),
            }
            )

            if (!response.ok) {
                throw new Error("Error al actualizar el producto");
            }

            toast.success('Producto actualizado');
            setSuccess("Producto actualizado correctamente");
            cleanData();
            setId("");
            setActiveTab("list");
            fetchData();
            } catch (error) {
                setError(error.message);
                alert("Error al actualizar el producto");
                console.error("Error:", errorProduct);
            } finally {
                setLoading(false);
            }
        };

        return {
            activeTab,
            setActiveTab,
            id,
            setId,
            name,
            setName,
            description,
            setDescription,
            price,
            setPrice,
            stock,
            setStock,
            errorProduct,
            setError,
            success,
            setSuccess,
            loading,
            setLoading,
            products,
            setProducts,
            cleanData,
            handleSubmit,
            fetchData,
            deleteProduct,
            updateProduct,
            handleUpdate
        };
    };

export default useDataPassRecovery;