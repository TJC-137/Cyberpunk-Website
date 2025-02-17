import { useNavigate } from "react-router-dom";
import gameCharacters from "../api/game-characters.json";
import { motion } from "framer-motion";

export default function GameCharacters() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Botón triangular para ir a la vista de Anime */}
      <motion.div
        className="fixed bottom-4 right-4 cursor-pointer w-40 h-40 bg-cover bg-center z-50"
        style={{
          backgroundImage: "url('/img/david-martinez.webp')",
          clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
          border: "4px solid #e8615a"
        }}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("/characters/anime")}
      ></motion.div>

      <button
        onClick={() => navigate("/characters/hub")}
        className="cyberpunk-button-back cyberpunk-heading group flex items-center space-x-2 mt-4 mb-8"
      >
        Back
      </button>
      <h1 className="cyberpunk-heading text-4xl font-bold text-cyber-secondary-500 mb-8">
        Game Characters
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {gameCharacters.map((character) => (
          <div
            key={character.name}
            className="cyberpunk-card overflow-hidden group cursor-pointer"
            onClick={() => navigate(`/character/${character.name}`)}
          >
            <img
              src={`/img/${character.image}`}
              alt={character.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-cyber-secondary-500">{character.name}</h3>
              <p className="text-cyber-primary-300 text-sm">{character.role}</p>
              <p className="text-gray-400">{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
