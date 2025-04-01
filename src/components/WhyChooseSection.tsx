
import { Scissors, Star, Users, Package } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const WhyChooseSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: <Scissors className="w-10 h-10 text-varon-gold" />,
      title: "Expertise Técnica",
      description: "Profissionais formados nas melhores técnicas de barbearia clássica e moderna."
    },
    {
      icon: <Star className="w-10 h-10 text-varon-gold" />,
      title: "Produtos de Alta Qualidade",
      description: "Selecionamos cuidadosamente produtos premium para proporcionar resultados excepcionais."
    },
    {
      icon: <Users className="w-10 h-10 text-varon-gold" />,
      title: "Ambiente Sofisticado",
      description: "Espaço projetado para proporcionar conforto, privacidade e uma experiência exclusiva."
    },
    {
      icon: <Package className="w-10 h-10 text-varon-gold" />,
      title: "Planos de Assinatura Exclusivos",
      description: "Benefícios especiais com nossos planos de assinatura mensais e pacotes personalizados."
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-varon-black to-gray-900">
      <div className="varon-container" ref={ref}>
        <h2 className="section-title">Experiência Superior em Cada Detalhe</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className={`gold-card ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-varon-gold">{reason.title}</h3>
                <p className="text-varon-silver text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
