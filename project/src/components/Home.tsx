import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&w=2000"
            alt="Cyberpunk City"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-bg-500 via-cyber-bg-500/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-6xl font-bold text-cyber-secondary-500 cyberpunk-heading">
              Welcome to Night City
            </h1>
            <p className="text-xl text-gray-300">
              Explore the dark future of Cyberpunk 2077 and Edgerunners. Where chrome meets flesh,
              and dreams come at a deadly price.
            </p>
            <button className="cyberpunk-button group flex items-center space-x-2">
              <span>Explore Night City</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Game & Anime Section */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-cyber-secondary-500 cyberpunk-heading">The Game</h2>
          <p className="text-gray-300">
            Cyberpunk 2077 is an open-world action-adventure RPG set in Night City,
            a megalopolis obsessed with power, glamour, and body modification.
          </p>
          <div className="cyberpunk-card p-2">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800"
              alt="Cyberpunk Game"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-cyber-primary-300 cyberpunk-heading">The Anime</h2>
          <p className="text-gray-300">
            Cyberpunk: Edgerunners tells a standalone story about a street kid trying to survive
            in Night City - a technology and body modification-obsessed city of the future.
          </p>
          <div className="cyberpunk-card p-2">
            <img
              src="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&w=800"
              alt="Cyberpunk Anime"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}