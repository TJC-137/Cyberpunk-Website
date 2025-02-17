import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharactersHub from "../components/CharactersHub";
import GameCharacters from "../components/GameCharacters";
import AnimeCharacters from "../components/AnimeCharacters";

interface CharactersProps {
  charactersView: "hub" | "game" | "anime";
  setCharactersView: (view: "hub" | "game" | "anime") => void;
}

export default function Characters({ charactersView, setCharactersView }: CharactersProps) {
  const navigate = useNavigate();

  // Actualizar la URL cuando cambie charactersView
  useEffect(() => {
    if (charactersView === "game") {navigate("/characters/game");} 

    else if (charactersView === "anime") {navigate("/characters/anime");} 

    else {navigate("/characters/hub");}
    
  }, [charactersView, navigate]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="relative w-[80%] h-[80%] overflow-hidden flex">
        {charactersView === "hub" && <CharactersHub setCharactersView={setCharactersView} />}
        {charactersView === "game" && <GameCharacters setCharactersView={setCharactersView} />}
        {charactersView === "anime" && <AnimeCharacters setCharactersView={setCharactersView} />}
      </div>
    </div>
  );
}
