import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gameCharacters from "../api/game-characters.json";
import animeCharacters from "../api/anime-characters.json";

export default function SelectedCharacter() {
  const { name } = useParams();
  const navigate = useNavigate();

  // Buscar el personaje en ambas listas
  const character = [...gameCharacters, ...animeCharacters].find(
    (char) => char.name.toLowerCase() === name?.toLowerCase()
  );

  // Si el personaje no se encuentra, mostrar mensaje de error
  if (!character) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-cyber-bg-900">
        <h1 className="text-4xl font-bold text-red-500">Character Not Found</h1>
        <motion.button
          className="cyberpunk-button-back cyberpunk-heading group flex items-center space-x-2 mt-4 mb-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
        >
          ⬅ Go Back
        </motion.button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-16 text-white bg-cyber-bg-900 rounded-lg shadow-lg relative"
    >
      {/* Botón de regreso */}
      <motion.button
        className="cyberpunk-button-back cyberpunk-heading group flex items-center space-x-2 mb-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate(-1)}
      >
        ⬅ Back to Characters
      </motion.button>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Imagen del personaje con efecto hover */}
        <motion.img
          src={`/img/${character.image}`}
          alt={character.name}
          className="w-64 h-64 object-cover border-4 border-cyber-yellow shadow-lg cursor-pointer"
          whileHover={{
            scale: 1.1,
            rotate: 2,
            boxShadow: "0 0 15px rgba(236, 229, 62, 0.8)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Detalles del personaje */}
        <div>
          <h1 className="text-4xl font-bold text-cyber-secondary-500 hover:animate-pulse transition duration-300">
            {character.name}
          </h1>
          <p className="text-lg text-gray-300 mt-4">{character.lore}</p>
        </div>
      </div>
    </motion.div>
  );
}
