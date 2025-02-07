import { useState } from 'react';
import { Play, X } from 'lucide-react';
import trailers from '../api/trailers.json';
import screenshots from '../api/screenshots.json';

function getEmbedUrl(url: string) {
  const match = url.match(/youtu\.be\/([^?]+)/);
  if (match && match[1]) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
  const reg = url.match(/v=([^&]+)/);
  if (reg && reg[1]) return `https://www.youtube.com/embed/${reg[1]}?autoplay=1`;
  return url;
}

export default function Media() {
  const [playingTrailer, setPlayingTrailer] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-cyber-secondary-500 cyberpunk-heading mb-12">Media</h1>
      
      {/* Trailers Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-cyber-primary-300 cyberpunk-heading mb-6">Trailers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {trailers.map((trailer, index) => (
            <div key={index} className="cyberpunk-card p-2 group">
              <div className="relative">
                {playingTrailer === index ? (
                  <div className="relative w-full h-64">
                    <iframe
                      src={getEmbedUrl(trailer.videoUrl)}
                      title={trailer.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                    <button
                      onClick={() => setPlayingTrailer(null)}
                      className="absolute top-2 right-2 p-2 rounded-full bg-cyber-secondary-500 text-cyber-bg-500"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <img
                      src={trailer.thumbnail}
                      alt={trailer.title}
                      className="w-full h-64 object-cover cursor-pointer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-cyber-bg-500/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <button
                        onClick={() => setPlayingTrailer(index)}
                        className="p-4 rounded-full bg-cyber-secondary-500 text-cyber-bg-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 cursor-pointer"
                      >
                        <Play className="w-6 h-6" />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <h3 className="mt-2 font-semibold text-cyber-secondary-500">{trailer.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshots Section */}
      <div>
        <h2 className="text-2xl font-bold text-cyber-primary-300 cyberpunk-heading mb-6">Screenshots</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {screenshots.map((shot, index) => (
            <div key={index} className="cyberpunk-card p-2 overflow-hidden">
              <img
                src={shot.src}
                alt={shot.alt}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
