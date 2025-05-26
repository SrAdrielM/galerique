import React, { useState, useEffect } from 'react';
import '../styles/AgregarPintura.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainMenu from '../components/MainMenu';

function AgregarPintura() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    size: '',
    // sellerId: '507f1f77bcf86cd799439011', // Comentado temporalmente
    techniqueId: '',
    categoriesId: ''
  });

  const [touched, setTouched] = useState({
    title: false,
    description: false,
    price: false,
    size: false,
    techniqueId: false,
    categoriesId: false
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [techniques, setTechniques] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Cargar técnicas y categorías al montar el componente
  useEffect(() => {
    fetchTechniques();
    fetchCategories();
  }, []);

  const fetchTechniques = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/techniques');
      const data = await response.json();
      setTechniques(data);
    } catch (error) {
      console.error('Error al cargar técnicas:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error al cargar categorías:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    // Validaciones básicas
    if (!image) {
      setMessage({ text: 'Por favor selecciona una imagen', type: 'error' });
      setLoading(false);
      return;
    }

    if (!formData.title || !formData.description || !formData.price || !formData.size || !formData.techniqueId || !formData.categoriesId) {
      setMessage({ text: 'Por favor completa todos los campos', type: 'error' });
      setLoading(false);
      return;
    }

    if (formData.title.length < 3) {
      setMessage({ text: 'El título debe tener al menos 3 caracteres', type: 'error' });
      setLoading(false);
      return;
    }

    if (formData.description.length < 10) {
      setMessage({ text: 'La descripción debe tener al menos 10 caracteres', type: 'error' });
      setLoading(false);
      return;
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      setMessage({ text: 'El precio debe ser mayor a 0', type: 'error' });
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('image', image);
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

      const response = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const result = await response.json();
        setMessage({ text: 'Pintura agregada exitosamente', type: 'success' });
        
        // Limpiar formulario
        setFormData({
          title: '',
          description: '',
          price: '',
          size: '',
          // sellerId: '507f1f77bcf86cd799439011', // Comentado temporalmente
          techniqueId: '',
          categoriesId: ''
        });
        setTouched({
          title: false,
          description: false,
          price: false,
          size: false,
          techniqueId: false,
          categoriesId: false
        });
        setImage(null);
        setImagePreview(null);
      } else {
        const error = await response.json();
        console.error('Error del servidor completo:', JSON.stringify(error, null, 2)); // Para ver el error completo
        setMessage({ text: error.message || 'Error al agregar la pintura', type: 'error' });
      }
    } catch (error) {
      console.error('Error completo:', error); // Para debugging
      setMessage({ text: 'Error de conexión', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <MainMenu />
      
      <div className="agregar-pintura-container">
        <div className="form-header">
          <h2>Agregar Nueva Pintura</h2>
          <p>Completa todos los campos para publicar tu obra</p>
        </div>

        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="pintura-form">
          <div className="form-row">
            <div className="form-section">
              <div className="input-group">
                <label htmlFor="title">Nombre de la obra (mínimo 3 caracteres)</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  placeholder="Ingresa el nombre de la obra"
                  required
                />
                <small className={`char-counter ${
                  !touched.title ? '' : 
                  formData.title.length >= 3 ? 'valid' : 'invalid'
                }`}>
                  {formData.title.length}/3 caracteres mínimo
                </small>
              </div>

              <div className="input-group">
                <label htmlFor="description">Descripción (mínimo 10 caracteres)</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  placeholder="Describe tu obra de arte..."
                  rows="4"
                  required
                />
                <small className={`char-counter ${
                  !touched.description ? '' : 
                  formData.description.length >= 10 ? 'valid' : 'invalid'
                }`}>
                  {formData.description.length}/10 caracteres mínimo
                </small>
              </div>

              <div className="form-row-inline">
                <div className="input-group">
                  <label htmlFor="techniqueId">Técnica utilizada</label>
                  <select
                    id="techniqueId"
                    name="techniqueId"
                    value={formData.techniqueId}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona una técnica</option>
                    {techniques.map(technique => (
                      <option key={technique._id} value={technique._id}>
                        {technique.techniqueName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="categoriesId">Corriente artística</label>
                  <select
                    id="categoriesId"
                    name="categoriesId"
                    value={formData.categoriesId}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona una categoría</option>
                    {categories.map(category => (
                      <option key={category._id} value={category._id}>
                        {category.categoryName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row-inline">
                <div className="input-group">
                  <label htmlFor="size">Medidas (en cm)</label>
                  <input
                    type="text"
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    placeholder="ej: 40x60"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="price">Precio</label>
                  <div className="price-input">
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      required
                    />
                    <span className="currency">USD</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-section">
              <div className="image-upload">
                <label htmlFor="image" className="image-upload-label">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Vista previa" className="image-preview" />
                  ) : (
                    <div className="upload-placeholder">
                      <div className="upload-icon">📷</div>
                      <p>Subir la foto de la obra</p>
                      <span>Haz clic para seleccionar</span>
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn-publicar"
              disabled={loading}
            >
              {loading ? 'Publicando...' : 'Publicar'}
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default AgregarPintura;