// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/MeetTheTeam';
import Pricing from './components/Pricing';
import Contact from './components/ContactForm';

function App() {
  // Fade-in animation setup
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

  // Meta Pixel initialization
  useEffect(() => {
    if (window.fbq) return;

    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', '1679573929421803');
    window.fbq('track', 'PageView');
  }, []);

  return (
    <div className="App">
      {/* Meta Pixel NoScript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1679573929421803&ev=PageView&noscript=1"
          alt="Meta Pixel"
        />
      </noscript>

      <Navbar />
      <section className="hero fade-in-section">
        <div className="hero-overlay"></div>
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
