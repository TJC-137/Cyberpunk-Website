import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Characters from './components/Characters';
import Music from './components/Music';
import Map from './components/Map';
import Media from './components/Media';

function App() {
  return (
    <div className="min-h-screen bg-[rgba(0,0,0,0.5)] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/music" element={<Music />} />
        <Route path="/map" element={<Map />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </div>
  );
}

export default App;