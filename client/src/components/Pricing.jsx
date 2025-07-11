import { useEffect, useRef, useState } from 'react';

const packages = [
  {
    name: 'Interior Detailing',
    price: '$80',
    description: 'Thorough vacuum, steam clean, interior wipe-down, leather/vinyl conditioning and window cleaning.',
  },
  {
    name: 'Exterior Wash',
    price: '$65',
    description: 'Pressure wash, foam cannon, hand wash, Wheel & Tire Cleaning and wax application.',
  },
  {
    name: 'Interior + Exterior Combo',
    price: '$150',
    description: 'Complete inside & out detail for a polished finish.',
  },
];

const addOns = [
  {
    name: 'Clay Bar Treatment',
    price: '$60',
    description: 'Removes embedded contaminants for a smooth surface.',
  },
  {
    name: 'Ceramic Coating',
    price: '$200+',
    description: 'Long-lasting hydrophobic layer with paint protection.',
  },
  {
    name: 'Headlight Restoration',
    price: '$50',
    description: 'Restores clarity to faded, yellowed headlights for improved visibility, safety and aesthetics.',
  },
];

// ✅ Fire Meta Pixel custom event
const trackPixelEvent = (eventName, data = {}) => {
  if (window.fbq) {
    window.fbq('trackCustom', eventName, data);
  }
};

const Pricing = () => {
  const sectionRef = useRef(null);
  const [hasFiredView, setHasFiredView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasFiredView) {
          trackPixelEvent('ViewPricing');
          setHasFiredView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasFiredView]);

  return (
    <section id="pricing" ref={sectionRef}>
      <h2>Pricing</h2>

      <h3 className="pricing-subtitle">Packages</h3>
      <div className="pricing-grid">
        {packages.map((item, i) => (
          <div
            className="pricing-card"
            key={i}
            onClick={() => trackPixelEvent('SelectPackage', {
              item_name: item.name,
              price: item.price,
            })}
          >
            <h4>{item.name}</h4>
            <p className="price">{item.price}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>

      <h3 className="pricing-subtitle">Add-Ons</h3>
      <div className="pricing-grid">
        {addOns.map((item, i) => (
          <div
            className="pricing-card"
            key={i}
            onClick={() => trackPixelEvent('SelectAddOn', {
              item_name: item.name,
              price: item.price,
            })}
          >
            <h4>{item.name}</h4>
            <p className="price">{item.price}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
