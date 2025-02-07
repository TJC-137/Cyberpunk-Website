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
        <TransformWrapper initialScale={1} wheel={{ step: 0.1 }}>
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
