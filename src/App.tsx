import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <main>
          <Hero />
          <About />
          <Academics />
          <Facilities />
          <Admissions />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;