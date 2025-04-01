
import { useEffect } from 'react';

const HeroSection = () => {
  const contactWhatsApp = () => {
    window.open('https://wa.me/5561999725901', '_blank');
  };
  
  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center pt-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/lovable-uploads/12093e07-d6dc-48f4-a174-4f06639db5fd.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="varon-container text-center py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Experiência Premium em Cuidados Masculinos
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-varon-silver animate-slide-up opacity-90">
            Onde técnica, tradição e inovação se encontram para criar seu melhor estilo
          </p>
          <button 
            onClick={contactWhatsApp}
            className="btn-primary animate-zoom-in"
          >
            Agende seu Horário
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
