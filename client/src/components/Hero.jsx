import React from 'react';
import banner from '../assets/banner.jpg'; // Make sure the path is correct

const Hero = () => (
  <section
    className="hero"
    style={{
      backgroundImage: `url(${banner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      padding: '6rem 2rem',
      textAlign: 'center',
    }}
  >
    <h1>2MB Auto Mobile Detailing</h1>
    <p>High-quality car detailing by people who care.</p>
  </section>
);

export default Hero;
