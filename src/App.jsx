import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Noise from './components/Noise';

import Lenis from 'lenis'


const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,       // smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smoothWheel: true,   // smooth mousewheel
      smoothTouch: false,  // optional for mobile
    });

    // Update lenis and sync with Framer Motion’s RAF
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    console.log('clicked');
  }
  return (
    <div className='h-auto bg-[#0b0e11]'>
      <Navbar func={handleScroll} refs={{ homeRef, aboutRef, projectsRef, contactRef }} />
      <Home refs={homeRef} />
      <About refs={aboutRef} />
      <Project refs={projectsRef} />
      <Contact refs={contactRef} />

    </div>
  );
};

export default App;