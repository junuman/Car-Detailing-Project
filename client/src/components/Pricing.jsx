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

const Pricing = () => (
  <section id="pricing">
    <h2>Pricing</h2>

    <h3 className="pricing-subtitle">Packages</h3>
    <div className="pricing-grid">
      {packages.map((item, i) => (
        <div className="pricing-card" key={i}>
          <h4>{item.name}</h4>
          <p className="price">{item.price}</p>
          <p className="description">{item.description}</p>
        </div>
      ))}
    </div>

    <h3 className="pricing-subtitle">Add-Ons</h3>
    <div className="pricing-grid">
      {addOns.map((item, i) => (
        <div className="pricing-card">
  <h4>{item.name}</h4>
  <p className="price">{item.price}</p>
  <p className="description">{item.description}</p>
</div>
      ))}
    </div>
  </section>
);

export default Pricing;
