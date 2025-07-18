// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; // Make sure you have this import
import Projects from './components/Projects'; // Make sure you have this import
import Contact from './components/Contact'; // Make sure you have this import
import Footer from './components/Footer'; // Make sure you have this import

function App() {
  return (
    // Added pt-16 to the main div to prevent fixed Navbar from overlapping content
    <div className="bg-gray-900 min-h-screen text-white pt-16">
      <Navbar />
      <Hero />      {/* This section will have id="home" */}
      <About />     {/* This section will have id="about" */}
      <Skills />    {/* This section will have id="skills" */}
      <Projects />  {/* This section will have id="projects" */}
      <Contact />   {/* This section will have id="contact" */}
      <Footer />    {/* This section will have id="footer" */}
    </div>
  );
}

export default App;