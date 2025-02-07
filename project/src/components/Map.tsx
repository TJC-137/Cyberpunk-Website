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
    <div style={{ 
      width: '100%', 
      height: '93vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#000' // fondo para resaltar el mapa
    }}>
      {/* Contenedor del mapa, un poco encajado y con estilo */}
      <div style={{ 
        width: '75%', 
        height: '75%', 
        maxWidth: '1200px', 
        position: 'relative', 
        boxShadow: '0 0 10px rgba(0,0,0,0.5)', 
        borderRadius: '8px', 
        overflow: 'hidden',
        cursor: 'grab', // Cambia el cursor al mover el mapa
        border: mode === "light" ? '2px solid #e8615a' : '2px solid #2be4ea',

      }}>
        {/* Botón para alternar el modo (light/dark) */}
        <button 
          onClick={toggleMode}
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 10,
            background: 'rgba(255,255,255,0.8)',
            borderRadius: 4,
            padding: '5px 10px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Toggle Mode
        </button>

        {/* Visor interactivo: el zoom se activa con la rueda del ratón */}
        <TransformWrapper
          initialScale={1}
          wheel={{ step: 0.1 }} // Sensibilidad del zoom (puedes ajustar el valor)
        >
          <TransformComponent>
            <img
              src={imageSrc}
              alt="Mapa de Cyberpunk 2077"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading='lazy'
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default Map;
