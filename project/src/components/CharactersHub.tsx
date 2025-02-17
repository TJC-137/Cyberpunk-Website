import { motion } from "framer-motion";

interface CharactersHubProps {
  setCharactersView: (view: "game" | "anime") => void;
}

export default function CharactersHub({ setCharactersView }: CharactersHubProps) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="relative w-[80%] h-[80%] overflow-hidden flex">
        {/* Botón para seleccionar personajes de juegos */}
        <motion.div
          className="absolute top-0 left-0 w-[98%] h-[98%] bg-cover bg-center cursor-pointer border-4 border-cyber-secondary-500"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
            scale: 0.97,
            backgroundImage: "url('/img/johny-game.webp')",
            opacity: 0.8,
          }}
          whileHover={{ scale: 1, opacity: 1 }}
          onClick={() => setCharactersView("game")}
        >
          <h2 className="cyberpunk-heading absolute top-8 left-8 text-3xl font-bold text-cyber-secondary-500">
            Game Characters
          </h2>
        </motion.div>

        {/* Botón para seleccionar personajes de anime */}
        <motion.div
          className="absolute top-0 right-0 w-[98%] h-[98%] bg-cover bg-center cursor-pointer border-4 border-cyber-primary-300"
          style={{
            clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
            scale: 0.97,
            backgroundImage: "url('/img/david-martinez.webp')",
            opacity: 0.8,
          }}
          whileHover={{ scale: 1, opacity: 1 }}
          onClick={() => setCharactersView("anime")}
        >
          <h2 className="cyberpunk-heading absolute bottom-8 right-8 text-3xl font-bold text-cyber-primary-300">
            Anime Characters
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
