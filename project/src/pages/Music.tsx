export default function Music() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-cyber-secondary-500 cyberpunk-heading mb-12">
        Music
      </h1>
      
      <div className="cyberpunk-card p-6">
        <div className="relative w-full">
          {/* Contenedor con borde y efectos */}
            <iframe 
              src="https://open.spotify.com/embed/album/1VGVJdmvOSRK2w9RKXk18A?utm_source=generator&theme=0" 
              width="100%" 
              height="500px"  
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg border-2 border-cyber-secondary-500 shadow-lg"
            ></iframe>         
        </div>
      </div>
    </div>
  );
}
