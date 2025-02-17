import { useNavigate } from "react-router-dom";
import animeCharacters from "../api/anime-characters.json";
import { motion } from "framer-motion";

export default function AnimeCharacters() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Botón triangular para ir a la vista de Game */}
      <motion.div
        className="fixed top-20 left-4 cursor-pointer w-40 h-40 bg-cover bg-center z-50"
        style={{
          backgroundImage: "url('/img/johny-game.webp')",
          clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
          border: "4px solid #2be4ea"
        }}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("/characters/game")}
      ></motion.div>

      <button
        onClick={() => navigate("/characters/hub")}
        className="cyberpunk-button-back cyberpunk-heading group flex items-center space-x-2 mt-4 mb-8"
      >
        Back
      </button>
      <h1 className="cyberpunk-heading text-4xl font-bold text-cyber-primary-300 mb-8">
        Anime Characters
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {animeCharacters.map((character) => (
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
              <h3 className="text-xl font-bold text-cyber-primary-300">{character.name}</h3>
              <p className="text-cyber-secondary-500 text-sm">{character.role}</p>
              <p className="text-gray-400">{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
