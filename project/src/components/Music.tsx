import React from 'react';
import { Play, Pause } from 'lucide-react';

const tracks = [
  {
    title: "I Really Want to Stay at Your House",
    artist: "Rosa Walton",
    duration: "4:13",
    type: "Edgerunners OST"
  },
  {
    title: "Never Fade Away",
    artist: "SAMURAI",
    duration: "3:58",
    type: "Cyberpunk 2077"
  },
  {
    title: "Chippin' In",
    artist: "SAMURAI",
    duration: "3:45",
    type: "Cyberpunk 2077"
  },
  {
    title: "Who's Ready for Tomorrow",
    artist: "Rat Boy",
    duration: "4:02",
    type: "Cyberpunk 2077"
  }
];

export default function Music() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-cyber-secondary-500 cyberpunk-heading mb-12">Music</h1>
      <div className="cyberpunk-card p-6">
        <div className="space-y-4">
          {tracks.map((track, index) => (
            <div
              key={track.title}
              className="flex items-center space-x-4 p-4 hover:bg-cyber-bg-500/50 rounded-lg transition-colors group"
            >
              <button className="p-2 rounded-full bg-cyber-secondary-500 text-cyber-bg-500 hover:bg-cyber-secondary-900 transition-colors">
                <Play className="w-5 h-5" />
              </button>
              <div className="flex-1">
                <h3 className="font-semibold text-cyber-secondary-500 group-hover:text-cyber-secondary-500/80 transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-gray-400">{track.artist}</p>
              </div>
              <span className="text-sm text-cyber-primary-300">{track.type}</span>
              <span className="text-sm text-gray-400 font-vt323">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}