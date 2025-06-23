// App.js (or App.jsx)
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/MeetTheTeam';
import Pricing from './components/Pricing';
import Contact from './components/ContactForm';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="App">
      <Navbar />
      
      <section className="hero fade-in-section">
  <div className="hero-overlay"></div> {/* ← This is the new overlay */}
  <div className="hero-content">
    <h1 className="hero-main">2MB</h1>
    <h2 className="hero-sub">Auto Mobile Detailing</h2>
    <p className="hero-tagline">High-quality car detailing by people who care.</p>
    <a href="#contact" className="cta-button">Book Now</a>
  </div>
</section>


      <Services />
      <Gallery />
      <Team />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
