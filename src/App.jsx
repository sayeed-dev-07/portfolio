import React, { useEffect, useRef } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Lenis from 'lenis';

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

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
    if (lenisRef.current && ref.current) {
      lenisRef.current.scrollTo(ref.current);
    }
  };

  return (
    <div className="h-auto bg-[#0b0e11]">
      <Navbar func={handleScroll} refs={{ homeRef, aboutRef, projectsRef, contactRef }} />
      <div className='pt-[10vh]'>
        <Home refs={homeRef} />
        <About refs={aboutRef} />
        <Project refs={projectsRef} />
        <Contact refs={contactRef} />
      </div>
    </div>
  );
};

export default App;
