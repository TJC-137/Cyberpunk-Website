import React from 'react';

const characters = [
  {
    name: "V",
    role: "Protagonist",
    description: "A mercenary seeking immortality in Night City.",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800"
  },
  {
    name: "Johnny Silverhand",
    role: "Digital Ghost",
    description: "A legendary rockerboy with a vendetta against corporations.",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800"
  },
  {
    name: "David Martinez",
    role: "Edgerunner",
    description: "A former student turned cyberpunk in search of glory.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=800"
  },
  {
    name: "Lucy",
    role: "Netrunner",
    description: "A mysterious netrunner with a dark past.",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=800"
  }
];

export default function Characters() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-cyber-secondary-500 cyberpunk-heading mb-12">Characters</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {characters.map((character) => (
          <div key={character.name} className="cyberpunk-card overflow-hidden group">
            <div className="relative">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg-300 to-transparent opacity-60" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-cyber-secondary-500">{character.name}</h3>
              <p className="text-cyber-primary-300 text-sm mb-2">{character.role}</p>
              <p className="text-gray-400">{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}