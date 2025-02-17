import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Music from './pages/Music';
import Map from './pages/Map';
import Media from './pages/Media';
import SelectedCharacter from './pages/SelectedCharacter';

function App() {
  return (
    <div className="min-h-screen bg-[rgba(0,0,0,0.5)] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/*" element={<Characters />} />
        <Route path="/character/:name" element={<SelectedCharacter />} />
        <Route path="/music" element={<Music />} />
        <Route path="/map" element={<Map />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;
