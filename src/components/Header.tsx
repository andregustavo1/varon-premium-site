
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const contactWhatsApp = () => {
    window.open('https://wa.me/5561999725901', '_blank');
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-xl' : 'bg-transparent'
      )}
    >
      <div className="varon-container flex justify-between items-center">
        <div className="text-varon-gold font-serif text-2xl font-bold animate-fade-in">VARÓN</div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Início', id: 'hero' },
            { name: 'Sobre', id: 'about' },
            { name: 'Diferenciais', id: 'why-choose' },
            { name: 'Serviços', id: 'services' },
            { name: 'Contato', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-varon-white hover:text-varon-gold transition-colors duration-300 text-sm uppercase tracking-wider"
            >
              {item.name}
            </button>
          ))}
        </nav>
        
        <button 
          onClick={contactWhatsApp}
          className="bg-varon-gold px-4 py-2 text-black font-medium rounded hover:bg-opacity-80 transition-all duration-300 text-sm"
        >
          Agende Agora
        </button>
      </div>
    </header>
  );
};

export default Header;
