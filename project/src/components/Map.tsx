import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Map: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    setMode(prev => prev === "light" ? "dark" : "light");
  };

  // Asegúrate de que las imágenes estén en public/assets/map/
  const imageSrc = mode === "light" 
    ? "/map/cyberpunk-map-light.jpg" 
    : "/map/cyberpunk-map-dark.jpg";

  return (
    // Contenedor principal que centra el div en la pantalla
    <div className="map-wrapper">
      
      {/* Contenedor del mapa con estilo */}
      <div className="map-container" 
        style={{ border: mode === "light" ? '2px solid #e8615a' : '2px solid #2be4ea'}
      }>
        
        {/* Botón para alternar el modo (light/dark) */}
        <button 
          onClick={toggleMode}
          className={`toggle-button ${mode} cyberpunk-heading`} 
        >
          Toggle Mode
        </button>

        {/* Visor interactivo del mapa */}
        <TransformWrapper
          initialScale={1}
          wheel={{step: 0.1 }} // Zoom step
          minScale={1}
          centerOnInit={true}
          limitToBounds={true} 
        >
          <TransformComponent>
            <img
              src={imageSrc}
              alt="Mapa de Cyberpunk 2077"
              className="map-image"
              loading='lazy'
              style={{width: '100%', height: '100%', display: 'block'}}
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default Map;
