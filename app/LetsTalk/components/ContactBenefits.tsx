import { Shield, Clock, Headphones, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';

const benefits = [
  {
    icon: Shield,
    title: "Secure Communication",
    description: "Enterprise-grade security for all your communication needs"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for your business"
  },
  {
    icon: Headphones,
    title: "Expert Consultation",
    description: "Dedicated team of communication specialists"
  },
  {
    icon: Zap,
    title: "Quick Integration",
    description: "Seamless setup and integration with your systems"
  }
];

const partners = [
  '/images/partners/application.svg',
  '/images/partners/finserv.svg',
  '/images/partners/gold-tier.svg',
  '/images/partners/growth.svg',
  '/images/partners/healthcare.svg', 
  '/images/partners/integration.svg',
  '/images/partners/onboarding.svg',
  '/images/partners/platinum-tier.svg',
  '/images/partners/silver-tier.svg',
  '/images/partners/techcorp.svg',
];

const ContactBenefits = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:w-1/2">
      <div className="grid grid-cols-2 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <benefit.icon className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6">Trusted by Industry Leaders</h3>
        <div 
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
        >
          <div className="inline-flex gap-8 min-w-full">
            {[...partners, ...partners].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBenefits; 