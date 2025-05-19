import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import Alumni from './components/Alumni';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Academics />
              <Facilities />
              <Admissions />
              <Gallery />
              <Contact />
            </main>
          } />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;