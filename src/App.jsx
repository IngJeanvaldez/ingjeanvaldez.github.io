import React from 'react';
import Navbar from './components/portfolio/Navbar';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import ExperienceTimeline from './components/portfolio/ExperienceTimeline';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Projects';
import Education from './components/portfolio/Education';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App