import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Music from './pages/Music';
import Map from './pages/Map';
import Media from './pages/Media';
import SelectedCharacter from './pages/SelectedCharacter';

function App() {
  const [charactersView, setCharactersView] = useState<"hub" | "game" | "anime">("hub");


  return (
    <div className="min-h-screen bg-[rgba(0,0,0,0.5)] text-white">
      <Navbar resetView={() => setCharactersView("hub")} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters charactersView={charactersView} setCharactersView={setCharactersView} />} />
        <Route path="/characters/hub" element={<Characters charactersView="hub" setCharactersView={setCharactersView} />} />
        <Route path="/characters/game" element={<Characters charactersView="game" setCharactersView={setCharactersView} />} />
        <Route path="/characters/anime" element={<Characters charactersView="anime" setCharactersView={setCharactersView} />} />
        <Route path="/character/:name" element={<SelectedCharacter />} />
        <Route path="/music" element={<Music />} />
        <Route path="/map" element={<Map />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
