import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-cyber-bg-500/90 cyberpunk-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-cyber-secondary-500" />
            <span className="text-xl font-bold text-cyber-secondary-500 font-vt323">Night City</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyber-secondary-500 transition-colors">Home</Link>
            <Link to="/characters" className="text-gray-300 hover:text-cyber-secondary-500 transition-colors">Characters</Link>
            <Link to="/music" className="text-gray-300 hover:text-cyber-secondary-500 transition-colors">Music</Link>
            <Link to="/media" className="text-gray-300 hover:text-cyber-secondary-500 transition-colors">Media</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}