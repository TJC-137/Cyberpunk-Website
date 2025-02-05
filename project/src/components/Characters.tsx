import React from 'react';
import characters from '../api/characters.json'; // Importar el JSON con los datos de los personajes

export default function Characters() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-cyber-secondary-500 cyberpunk-heading mb-12">Characters</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {characters.map((character) => (
          <div key={character.name} className="cyberpunk-card overflow-hidden group">
            <div className="relative">
              <img
                src={character.image}  // Aquí se usa la ruta del JSON
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
