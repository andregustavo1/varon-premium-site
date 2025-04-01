
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const contactWhatsApp = () => {
    window.open('https://wa.me/5561999725901', '_blank');
  };
  
  const openInstagram = () => {
    window.open('https://instagram.com/varonbarbearia', '_blank');
  };
  
  const openFacebook = () => {
    window.open('https://facebook.com/varonbarbearia', '_blank');
  };

  return (
    <footer className="bg-varon-darkgray py-12">
      <div className="varon-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-varon-gold font-serif text-3xl font-bold mb-4">VARÓN</div>
            <p className="text-varon-silver text-sm mb-6">
              Espaço exclusivo de autocuidado, estilo e sofisticação para homens que valorizam uma experiência de alto nível.
            </p>
          </div>
          
          <div>
            <h3 className="text-varon-gold text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: 'Início', id: 'hero' },
                { name: 'Sobre', id: 'about' },
                { name: 'Diferenciais', id: 'why-choose' },
                { name: 'Serviços', id: 'services' },
                { name: 'Contato', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-varon-silver hover:text-varon-gold transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-varon-gold text-lg font-semibold mb-4">Contato</h3>
            <button 
              onClick={contactWhatsApp}
              className="text-varon-silver hover:text-varon-gold transition-colors duration-300 flex items-center gap-2 mb-3"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-varon-gold"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (61) 99972-5901
            </button>
            
            <div className="flex space-x-4 mt-6">
              <button 
                onClick={openInstagram}
                className="w-10 h-10 rounded-full border border-varon-gold flex items-center justify-center text-varon-gold hover:bg-varon-gold hover:text-black transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="18" cy="6" r="1.5"></circle>
                </svg>
              </button>
              
              <button 
                onClick={openFacebook}
                className="w-10 h-10 rounded-full border border-varon-gold flex items-center justify-center text-varon-gold hover:bg-varon-gold hover:text-black transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-varon-silver text-sm">
            © {new Date().getFullYear()} Varón Barbearia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
