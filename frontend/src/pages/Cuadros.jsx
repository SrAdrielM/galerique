import React, { useState, useEffect } from "react";
import '../styles/Cuadros.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";

function Cuadros() {
  const [cuadros, setCuadros] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtros, setFiltros] = useState({
    estilo: '',
    precioValor: 500,
    precioOperador: 'menor', // 'igual', 'mayor', 'menor'
    artista: ''
  });

  // Estados para paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const [cuadrosPorPagina, setCuadrosPorPagina] = useState(8); // Número de cuadros por página

  // Estado para controlar si se muestra el filtro de precio
  const [mostrarFiltroPrecio, setMostrarFiltroPrecio] = useState(false);

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchCuadros();
    fetchCategorias();
  }, []);

  const fetchCuadros = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:4000/api/products');
      
      if (!response.ok) {
        throw new Error('Error al cargar los cuadros');
      }
      
      const data = await response.json();
      setCuadros(data);
    } catch (error) {
      console.error('Error al cargar cuadros:', error);
      setError('Error al cargar los cuadros');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategorias = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/categories');
      
      if (!response.ok) {
        throw new Error('Error al cargar las categorías');
      }
      
      const data = await response.json();
      setCategorias(data);
    } catch (error) {
      console.error('Error al cargar categorías:', error);
    }
  };

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
    // Resetear a la primera página cuando se cambian los filtros
    setPaginaActual(1);
  };

  const handlePrecioChange = (valor) => {
    setFiltros(prev => ({
      ...prev,
      precioValor: Number(valor)
    }));
    setPaginaActual(1);
  };

  const handlePrecioInputChange = (e) => {
    const valor = e.target.value;
    // Permitir solo números y punto decimal
    if (valor === '' || /^\d*\.?\d*$/.test(valor)) {
      const numeroValor = valor === '' ? 0 : parseFloat(valor);
      // Limitar a 2 decimales y máximo 6 dígitos antes del punto
      if (numeroValor <= 999999.99) {
        setFiltros(prev => ({
          ...prev,
          precioValor: numeroValor || 0
        }));
        setPaginaActual(1);
      }
    }
  };

  const handlePrecioInputBlur = (e) => {
    // Redondear a 2 decimales cuando pierde el foco
    const valor = parseFloat(e.target.value) || 0;
    setFiltros(prev => ({
      ...prev,
      precioValor: Math.round(valor * 100) / 100
    }));
  };

  const handlePrecioOperadorChange = (operador) => {
    setFiltros(prev => ({
      ...prev,
      precioOperador: operador
    }));
    setPaginaActual(1);
  };

  // Función para filtrar cuadros
  const cuadrosFiltrados = cuadros.filter(cuadro => {
    let cumpleFiltros = true;

    // Filtro por precio con operadores (solo si el filtro está activo)
    if (mostrarFiltroPrecio) {
      const precio = cuadro.price;
      const valorFiltro = filtros.precioValor;
      
      switch (filtros.precioOperador) {
        case 'igual':
          // Tolerancia de ±10 para "igual"
          cumpleFiltros = cumpleFiltros && (precio >= valorFiltro - 10 && precio <= valorFiltro + 10);
          break;
        case 'mayor':
          cumpleFiltros = cumpleFiltros && precio >= valorFiltro;
          break;
        case 'menor':
          cumpleFiltros = cumpleFiltros && precio <= valorFiltro;
          break;
        default:
          break;
      }
    }

    // Filtro por estilo (categoría)
    if (filtros.estilo && cuadro.categoriesId) {
      cumpleFiltros = cumpleFiltros && cuadro.categoriesId._id === filtros.estilo;
    }

    // Filtro por artista (vendedor)
    if (filtros.artista && cuadro.sellerId) {
      const artista = cuadro.sellerId.name?.toLowerCase();
      cumpleFiltros = cumpleFiltros && artista?.includes(filtros.artista.toLowerCase());
    }

    return cumpleFiltros;
  });

  // Cálculos para paginación
  const totalPaginas = Math.ceil(cuadrosFiltrados.length / cuadrosPorPagina);
  const indiceInicio = (paginaActual - 1) * cuadrosPorPagina;
  const indiceFin = indiceInicio + cuadrosPorPagina;
  const cuadrosPaginados = cuadrosFiltrados.slice(indiceInicio, indiceFin);

  // Funciones de navegación
  const irAPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    // Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      irAPagina(paginaActual - 1);
    }
  };

  const paginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      irAPagina(paginaActual + 1);
    }
  };

  // Generar números de páginas para mostrar
  const generarNumerosPaginas = () => {
    const paginas = [];
    const maxPaginasVisibles = 5;
    
    if (totalPaginas <= maxPaginasVisibles) {
      // Si hay pocas páginas, mostrar todas
      for (let i = 1; i <= totalPaginas; i++) {
        paginas.push(i);
      }
    } else {
      // Lógica para mostrar páginas con "..."
      if (paginaActual <= 3) {
        // Mostrar las primeras páginas
        paginas.push(1, 2, 3, 4, '...', totalPaginas);
      } else if (paginaActual >= totalPaginas - 2) {
        // Mostrar las últimas páginas
        paginas.push(1, '...', totalPaginas - 3, totalPaginas - 2, totalPaginas - 1, totalPaginas);
      } else {
        // Mostrar páginas alrededor de la actual
        paginas.push(1, '...', paginaActual - 1, paginaActual, paginaActual + 1, '...', totalPaginas);
      }
    }
    
    return paginas;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <MainMenu />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando cuadros...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <MainMenu />
        <div className="error-container">
          <h3>¡Oops! Algo salió mal</h3>
          <p>{error}</p>
          <button onClick={fetchCuadros} className="retry-btn">
            Intentar de nuevo
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <MainMenu />

      <div className="titulo-cuadros">
        <h2>Nuestra Colección de Cuadros</h2>
        <p className="subtitulo-cuadros">
          {cuadrosFiltrados.length} {cuadrosFiltrados.length === 1 ? 'obra disponible' : 'obras disponibles'}
          {mostrarFiltroPrecio && (
            <span className="filtro-activo">
              • Precio {filtros.precioOperador === 'igual' ? '≈' : filtros.precioOperador === 'mayor' ? '≥' : '≤'} ${filtros.precioValor}
            </span>
          )}
          {cuadrosFiltrados.length > cuadrosPorPagina && (
            <span> • Página {paginaActual} de {totalPaginas}</span>
          )}
        </p>
      </div>

      <div className="filtros-container">
        <div className="filtro">
          <label>Estilo:</label>
          <select name="estilo" value={filtros.estilo} onChange={handleFiltroChange}>
            <option value="">Todos los estilos</option>
            {categorias.map(categoria => (
              <option key={categoria._id} value={categoria._id}>
                {categoria.categoryName}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filtro-precio">
          <div className="precio-activador">
            <label>Precio:</label>
            <button 
              className={`btn-filtro-precio ${mostrarFiltroPrecio ? 'activo' : ''}`}
              onClick={() => setMostrarFiltroPrecio(!mostrarFiltroPrecio)}
            >
              {mostrarFiltroPrecio ? '✓ Filtro activo' : 'Filtrar por precio'}
            </button>
          </div>
          
          {mostrarFiltroPrecio && (
            <div className="precio-controles">
              <div className="precio-operador">
                <select 
                  value={filtros.precioOperador} 
                  onChange={(e) => handlePrecioOperadorChange(e.target.value)}
                >
                  <option value="menor">Menor o igual que</option>
                  <option value="mayor">Mayor o igual que</option>
                  <option value="igual">Aproximadamente</option>
                </select>
              </div>
              <div className="precio-controles-simple">
                <div className="precio-input-group">
                  <input
                    type="text"
                    value={filtros.precioValor}
                    onChange={handlePrecioInputChange}
                    onBlur={handlePrecioInputBlur}
                    className="precio-input"
                    placeholder="Escribe el precio"
                  />
                  <span className="precio-currency">USD</span>
                </div>
                
                <div className="precio-quick-buttons">
                  <button 
                    className="quick-btn"
                    onClick={() => handlePrecioChange(100)}
                  >
                    $100
                  </button>
                  <button 
                    className="quick-btn"
                    onClick={() => handlePrecioChange(250)}
                  >
                    $250
                  </button>
                  <button 
                    className="quick-btn"
                    onClick={() => handlePrecioChange(500)}
                  >
                    $500
                  </button>
                  <button 
                    className="quick-btn"
                    onClick={() => handlePrecioChange(1000)}
                  >
                    $1000
                  </button>
                </div>
              </div>
              <button 
                className="btn-limpiar-precio"
                onClick={() => {
                  setMostrarFiltroPrecio(false);
                  setPaginaActual(1);
                }}
              >
                ✕ Quitar filtro de precio
              </button>
            </div>
          )}
        </div>
        
        <div className="filtro">
          <label>Artista:</label>
          <select name="artista" value={filtros.artista} onChange={handleFiltroChange}>
            <option value="">Todos los artistas</option>
            {/* Los artistas se cargarán dinámicamente basados en los datos */}
          </select>
        </div>
        
        <div className="filtro">
          <label>Por página:</label>
          <select 
            value={cuadrosPorPagina} 
            onChange={(e) => {
              setCuadrosPorPagina(Number(e.target.value));
              setPaginaActual(1); // Resetear a la primera página
            }}
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
          </select>
        </div>
      </div>

      {cuadrosFiltrados.length === 0 ? (
        <div className="no-results">
          <h3>No se encontraron cuadros</h3>
          <p>
            {cuadros.length === 0 
              ? "Aún no hay cuadros publicados. ¡Sé el primero en agregar uno!"
              : "No hay cuadros que coincidan con los filtros seleccionados."
            }
          </p>
        </div>
      ) : (
        <>
          <div className="cuadros-container">
            {cuadrosPaginados.map((cuadro) => (
              <div className="cuadro-card" key={cuadro._id}>
                <div className="cuadro-image">
                  <img 
                    src={cuadro.image} 
                    alt={cuadro.title}
                    onError={(e) => {
                      e.target.src = '/placeholder-image.jpg'; // Imagen por defecto si falla
                    }}
                  />
                </div>
                <div className="cuadro-info">
                  <h3 className="artist-name">
                    {cuadro.sellerId?.name || 'Artista Anónimo'}
                  </h3>
                  <h4 className="cuadro-title">{cuadro.title}</h4>
                  <p className="cuadro-description">{cuadro.description}</p>
                  <div className="cuadro-details">
                    <div className="cuadro-technique">
                      <strong>Técnica:</strong> {cuadro.techniqueId?.techniqueName || 'No especificada'}
                    </div>
                    <div className="cuadro-size">
                      <strong>Tamaño:</strong> {cuadro.size}
                    </div>
                    <div className="cuadro-category">
                      <strong>Estilo:</strong> {cuadro.categoriesId?.categoryName || 'No especificado'}
                    </div>
                  </div>
                  <div className="cuadro-price">${cuadro.price.toFixed(2)} USD</div>
                  <button className="btn-agregar">Agregar al carrito</button>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          {totalPaginas > 1 && (
            <div className="paginacion">
              <button 
                className={`page-btn ${paginaActual === 1 ? 'disabled' : ''}`}
                onClick={paginaAnterior}
                disabled={paginaActual === 1}
              >
                ←
              </button>
              
              {generarNumerosPaginas().map((pagina, index) => (
                <button
                  key={index}
                  className={`page-btn ${
                    pagina === paginaActual ? 'active' : ''
                  } ${pagina === '...' ? 'dots' : ''}`}
                  onClick={() => pagina !== '...' && irAPagina(pagina)}
                  disabled={pagina === '...'}
                >
                  {pagina}
                </button>
              ))}
              
              <button 
                className={`page-btn ${paginaActual === totalPaginas ? 'disabled' : ''}`}
                onClick={paginaSiguiente}
                disabled={paginaActual === totalPaginas}
              >
                →
              </button>
            </div>
          )}
        </>
      )}

      <Footer />
    </>
  );
}

export default Cuadros;