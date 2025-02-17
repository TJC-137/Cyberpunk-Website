import { Routes, Route } from "react-router-dom";
import CharactersHub from "../components/CharactersHub";
import GameCharacters from "../components/GameCharacters";
import AnimeCharacters from "../components/AnimeCharacters";

export default function Characters() {
  return (
    <Routes>
      <Route index element={<CharactersHub />} />
      <Route path="hub" element={<CharactersHub />} />
      <Route path="game" element={<GameCharacters />} />
      <Route path="anime" element={<AnimeCharacters />} />
    </Routes>
  );
}
