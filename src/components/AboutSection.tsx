
import { Scissors, Users, Clock, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Scissors className="w-8 h-8 text-varon-gold" />,
      title: "Atendimento Personalizado",
      description: "Serviços adaptados às suas necessidades e preferências pessoais."
    },
    {
      icon: <Star className="w-8 h-8 text-varon-gold" />,
      title: "Produtos Premium",
      description: "Utilizamos apenas produtos de alta qualidade para resultados superiores."
    },
    {
      icon: <Users className="w-8 h-8 text-varon-gold" />,
      title: "Ambiente Exclusivo",
      description: "Espaço sofisticado projetado para seu conforto e privacidade."
    },
    {
      icon: <Clock className="w-8 h-8 text-varon-gold" />,
      title: "Profissionais Especializados",
      description: "Equipe altamente treinada com expertise em tendências atuais."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="varon-container" ref={ref}>
        <h2 className="section-title text-black animate-fade-in">A Excelência da Varón Barbearia</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className={`relative rounded-lg overflow-hidden ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <img 
              src="https://images.unsplash.com/photo-1589985270958-ad4b0a0fe6ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
              alt="Interior da Varón Barbearia" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          
          <div>
            <p className={`text-lg mb-8 text-gray-700 leading-relaxed ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Na Varón Barbearia, elevamos os cuidados masculinos a um novo patamar, combinando técnicas tradicionais com abordagens contemporâneas. Nosso espaço foi concebido para proporcionar uma experiência completa de bem-estar e estilo, onde cada detalhe foi cuidadosamente pensado para sua satisfação e conforto.
            </p>
            <p className={`text-lg mb-8 text-gray-700 leading-relaxed ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              Acreditamos que o verdadeiro luxo está nos detalhes, no atendimento personalizado e na excelência dos serviços. Nossa missão é transformar uma necessidade rotineira em uma experiência memorável que renova não apenas sua aparência, mas também seu bem-estar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className={`${inView ? 'animate-slide-up' : 'opacity-0'}`} 
                  style={{ animationDelay: `${0.6 + (index * 0.2)}s` }}
                >
                  <div className="icon-container bg-gray-100">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-varon-gold text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
