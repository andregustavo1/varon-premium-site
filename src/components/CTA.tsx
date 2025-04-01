
import { useInView } from 'react-intersection-observer';

const CTA = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactWhatsApp = () => {
    window.open('https://wa.me/5561999725901', '_blank');
  };

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
      
      <div className="varon-container relative z-10 text-center">
        <div className={`max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transforme seu Visual com a Varón
          </h2>
          <p className="text-lg md:text-xl mb-10 text-varon-silver max-w-2xl mx-auto">
            Uma experiência premium de cuidados masculinos está à sua espera. Dê o primeiro passo para elevar seu estilo pessoal.
          </p>
          <button 
            onClick={contactWhatsApp} 
            className="bg-varon-gold text-black px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 hover:bg-opacity-80 transform hover:scale-105"
          >
            Agende Agora e Experimente a Diferença
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
