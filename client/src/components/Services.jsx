import React from 'react';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll'; // Optional, if using fade-ins

const services = [
  { icon: '🧽', name: 'Interior Detailing', description: 'Deep cleaning of all cabin surfaces' },
  { icon: '🚗', name: 'Exterior Wash', description: 'Hand wash, foam, rinse, and dry' },
  { icon: '🧼', name: 'Clay Bar Treatment', description: 'Removes contaminants for a smooth finish' },
  { icon: '✨', name: 'Wax Protection', description: 'Enhances shine and protects paint' },
  { icon: '🛡️', name: 'Ceramic Coating', description: 'Long-term paint protection and gloss' },
];

const Services = () => {
  const [ref, isVisible] = useFadeInOnScroll(); // Optional fade-in

  return (
    <section
      id="services"
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <div className="icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
