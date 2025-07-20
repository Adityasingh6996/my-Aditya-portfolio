// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; // <-- Make sure this is imported
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white pt-16">
      <Navbar />
      <Hero />
      <About />
      <Skills /> {/* <-- Place it here */}
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;