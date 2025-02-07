import { Play } from 'lucide-react';

export default function Media() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-cyber-secondary-500 cyberpunk-heading mb-12">Media</h1>
      
      {/* Trailers Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-cyber-primary-300 cyberpunk-heading mb-6">Trailers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="cyberpunk-card p-2 group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=800"
                alt="Game Trailer"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-cyber-bg-500/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-4 rounded-full bg-cyber-secondary-500 text-cyber-bg-500 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-6 h-6" />
                </button>
              </div>
            </div>
            <h3 className="mt-2 font-semibold text-cyber-secondary-500">Official Game Trailer</h3>
          </div>
          <div className="cyberpunk-card p-2 group">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1599501887769-8038baa35618?auto=format&fit=crop&w=800"
                alt="Anime Trailer"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-cyber-bg-500/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-4 rounded-full bg-cyber-secondary-500 text-cyber-bg-500 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-6 h-6" />
                </button>
              </div>
            </div>
            <h3 className="mt-2 font-semibold text-cyber-secondary-500">Edgerunners Trailer</h3>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div>
        <h2 className="text-2xl font-bold text-cyber-primary-300 cyberpunk-heading mb-6">Screenshots</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&w=800",
            "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&w=800"
          ].map((src, index) => (
            <div key={index} className="cyberpunk-card p-2 overflow-hidden">
              <img
                src={src}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}