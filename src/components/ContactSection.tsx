
import { MapPin, Mail, Phone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactWhatsApp = () => {
    window.open('https://wa.me/5561999725901', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:varonbarbearia@gmail.com', '_blank');
  };

  const openMaps = () => {
    window.open('https://maps.google.com/?q=Varón+Barbearia+Águas+Claras+Brasília+DF', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/varonbarbearia', '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-varon-gold" />,
      title: "WhatsApp",
      text: "(61) 99972-5901",
      action: contactWhatsApp
    },
    {
      icon: <Mail className="w-6 h-6 text-varon-gold" />,
      title: "E-mail",
      text: "varonbarbearia@gmail.com",
      action: openEmail
    },
    {
      icon: <MapPin className="w-6 h-6 text-varon-gold" />,
      title: "Endereço",
      text: "Águas Claras, Brasília - DF",
      action: openMaps
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6 text-varon-gold"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <circle cx="12" cy="12" r="4"></circle>
          <circle cx="18" cy="6" r="1.5"></circle>
        </svg>
      ),
      title: "Instagram",
      text: "@varonbarbearia",
      action: openInstagram
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="varon-container" ref={ref}>
        <h2 className="section-title text-black">Visite Nossa Barbearia</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div className={`space-y-6 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            {contactInfo.map((item, index) => (
              <button 
                key={item.title}
                onClick={item.action}
                className="flex items-center gap-4 w-full p-4 border border-gray-200 rounded-lg hover:border-varon-gold transition-all duration-300 shadow-sm"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="text-left">
                  <h3 className="text-gray-700 font-medium">{item.title}</h3>
                  <p className="text-varon-gold">{item.text}</p>
                </div>
              </button>
            ))}
          </div>
          
          <div className={`rounded-lg overflow-hidden border border-gray-200 shadow-md h-[400px] ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30740.350365832347!2d-48.03346120507812!3d-15.839620000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3367273fd44f%3A0x9f00381ac4acd0b7!2s%C3%81guas%20Claras%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1690558303307!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Varón Barbearia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
