import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Map: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    setMode(prev => prev === "light" ? "dark" : "light");
  };

  const imageSrc = mode === "light" 
    ? "/map/cyberpunk-map-light.jpg" 
    : "/map/cyberpunk-map-dark.jpg";

  return (
    <div className="map-wrapper">
      <div className={`map-container ${mode}`}>
        <button 
          onClick={toggleMode}
          className={`toggle-button ${mode} cyberpunk-heading`} 
        >
          Toggle Mode
        </button>
        <TransformWrapper 
            initialScale={1.1}              // Inicia con un zoom mayor al 100%
            minScale={1.1}                  // Evita hacer zoom por debajo de 1.5
            wheel={{ step: 0.1 }}           // Sensibilidad del zoom con la rueda
            centerOnInit={true}            // Centra el contenido inicialmente
            limitToBounds={true}            // Limita el panning para evitar espacio vacío excesivo
        >
          <TransformComponent>
            <img
              src={imageSrc}
              alt="Mapa de Cyberpunk 2077"
              className="map-image"
              loading="lazy"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default Map;
