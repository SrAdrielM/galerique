import React, { useState, useRef, useEffect } from 'react';
import '../components/CategorySlider.css';

function CategorySlider({ title, items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Validación temprana: si no hay items, no renderizar nada
  if (!items || items.length === 0) {
    return (
      <section className="category-slider-section">
        <div className="container">
          <div className="slider-header">
            <h2 className="slider-title">{title || 'Categorías'}</h2>
          </div>
          <div className="empty-slider">
            <p>No hay elementos para mostrar</p>
          </div>
        </div>
      </section>
    );
  }

  // Responsive: ajustar items por vista según el tamaño de pantalla
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setItemsPerView(1);
      } else if (width < 768) {
        setItemsPerView(2);
      } else if (width < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  // Función para mover al siguiente slide (con loop)
  const nextSlideLoop = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const nextSlide = () => {
    setUserInteracted(true);
    if (!isTransitioning && currentIndex < maxIndex) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    setUserInteracted(true);
    if (!isTransitioning && currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const goToSlide = (index) => {
    setUserInteracted(true);
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Auto-play con loop y pausa por interacción
  useEffect(() => {
    if (!items || items.length <= 1 || userInteracted) return;
    
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!isPaused) {
          nextSlideLoop();
        }
      }, 4000); // Cambia cada 4 segundos
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, userInteracted, items]);

  // Pausar auto-play cuando el mouse está sobre el carrusel
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Reanudar auto-play después de un tiempo sin interacción
  useEffect(() => {
    if (userInteracted) {
      const resumeTimer = setTimeout(() => {
        setUserInteracted(false);
      }, 10000); // Reanuda después de 10 segundos sin interacción

      return () => clearTimeout(resumeTimer);
    }
  }, [userInteracted]);

  return (
    <section className="category-slider-section">
      <div className="container">
        <div className="slider-header">
          <h2 className="slider-title">{title || 'Categorías'}</h2>
          <div className="slider-header-controls">
            {items.length > itemsPerView && (
              <div className="slider-controls">
                <button 
                  className={`slider-btn prev ${currentIndex === 0 ? 'disabled' : ''}`}
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                >
                  ←
                </button>
                <button 
                  className={`slider-btn next ${currentIndex >= maxIndex ? 'disabled' : ''}`}
                  onClick={nextSlide}
                  disabled={currentIndex >= maxIndex}
                >
                  →
                </button>
              </div>
            )}
            {items.length > 1 && (
              <div className="autoplay-controls">
                <button 
                  className={`autoplay-btn ${userInteracted ? 'stopped' : 'playing'}`}
                  onClick={() => setUserInteracted(!userInteracted)}
                  title={userInteracted ? 'Reanudar auto-play' : 'Pausar auto-play'}
                >
                  {userInteracted ? '▶' : '⏸'}
                </button>
                {!userInteracted && !isPaused && (
                  <div className="autoplay-indicator">
                    <div className="autoplay-progress"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div 
          className="slider-container" 
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none'
            }}
          >
            {items.map((item, index) => (
              <div 
                key={index} 
                className="slider-item"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="item-card">
                  <div className="item-image">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="item-overlay">
                      <span className="item-title">{item.title}</span>
                      <button className="explore-btn">Explorar</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de punto */}
        {maxIndex > 0 && items.length > itemsPerView && (
          <div className="slider-dots">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CategorySlider;