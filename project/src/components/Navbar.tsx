import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-cyber-bg-500/90 cyberpunk-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center space-x-2 ">
          <img src="icon/edgerunners_logo.png" alt="CYBERPUNK" className="w-12 h-12 object-contain rounded-full" />
          <img src="img/CP2077.webp" alt="CYBERPUNK" className="w-32 h-32 object-contain rounded-full img-responsive-560" />
          </Link>

          <div className="flex space-x-8">
            <Link to="/" className="text-red-400 hover:text-cyber-secondary-500 transition-colors cyberpunk-heading">Home</Link>
            <Link to="/characters" className="text-red-400 hover:text-cyber-secondary-500 transition-colors cyberpunk-heading">Characters</Link>
            <Link to="/music" className="text-red-400 hover:text-cyber-secondary-500 transition-colors cyberpunk-heading">Music</Link>
            <Link to="/map" className="text-red-400 hover:text-cyber-secondary-500 transition-colors cyberpunk-heading">Map</Link>
            <Link to="/media" className="text-red-400 hover:text-cyber-secondary-500 transition-colors cyberpunk-heading">Media</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}