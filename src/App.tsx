import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { ParallaxComponent } from './components/ui/parallax-scrolling';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { Education, Contact, Footer } from './components/EducationContact';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Global smooth scroll — runs once, covers the entire page
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div id="app-root">
      <div className="bg-grid" />
      <div className="glow glow-v" />
      <div className="glow glow-c" />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ParallaxComponent />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
