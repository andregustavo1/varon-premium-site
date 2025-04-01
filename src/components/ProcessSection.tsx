
import { useInView } from 'react-intersection-observer';

const ProcessSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: "01",
      title: "Agendamento",
      description: "Escolha o horário que melhor se adapta à sua rotina através do nosso WhatsApp."
    },
    {
      number: "02",
      title: "Recepção e Diagnóstico",
      description: "Seja recebido em nosso espaço exclusivo e converse com nosso especialista sobre suas expectativas."
    },
    {
      number: "03",
      title: "Procedimento Personalizado",
      description: "Desfrute de serviços executados com precisão técnica e produtos premium."
    },
    {
      number: "04",
      title: "Finalização e Recomendações",
      description: "Receba dicas profissionais para manter seu visual impecável até o próximo atendimento."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-varon-black">
      <div className="varon-container" ref={ref}>
        <h2 className="section-title">A Experiência Varón</h2>
        
        <div className="relative mt-20">
          {/* Linha conectora */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-varon-gold/30 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`relative flex flex-col items-center ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-black w-20 h-20 rounded-full border-4 border-varon-gold flex items-center justify-center mb-6 z-10">
                  <span className="text-2xl font-bold text-varon-gold">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-varon-gold text-center">
                  {step.title}
                </h3>
                <p className="text-varon-silver text-center text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
