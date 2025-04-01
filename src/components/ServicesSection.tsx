
import { Scissors, Check, Clock, Star, Package } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Scissors className="w-8 h-8 text-varon-gold" />,
      title: "Cortes Clássicos e Modernos",
      description: "Cortes executados com precisão técnica, respeitando as características individuais e seguindo as últimas tendências ou estilos tradicionais."
    },
    {
      icon: <Check className="w-8 h-8 text-varon-gold" />,
      title: "Design de Barba",
      description: "Modelagem e tratamento de barba que combina com seu formato de rosto e estilo pessoal, garantindo uma aparência impecável."
    },
    {
      icon: <Star className="w-8 h-8 text-varon-gold" />,
      title: "Tratamentos Faciais",
      description: "Limpeza de pele, esfoliação e hidratação facial específica para a pele masculina, promovendo saúde e vigor."
    },
    {
      icon: <Clock className="w-8 h-8 text-varon-gold" />,
      title: "Tratamentos Capilares",
      description: "Hidratação, nutrição e reconstrução capilar personalizados de acordo com seu tipo de cabelo e necessidades específicas."
    },
    {
      icon: <Package className="w-8 h-8 text-varon-gold" />,
      title: "Planos de Assinatura",
      description: "Acesso ilimitado aos serviços essenciais e descontos em tratamentos premium com nossos planos mensais exclusivos."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="varon-container" ref={ref}>
        <h2 className="section-title">Serviços Premium</h2>
        
        <div className="space-y-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`flex flex-col md:flex-row gap-6 p-6 border border-varon-silver/20 rounded-lg hover:border-varon-gold/50 transition-all duration-300 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0 bg-black p-4 rounded-full border border-varon-gold/50 mx-auto md:mx-0">
                {service.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-varon-gold text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-varon-silver text-center md:text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
