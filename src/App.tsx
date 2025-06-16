import { useState, useEffect } from 'react';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import GridBackground from './components/GridBackground';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';
import ReachMe from './components/ReachMe';
import SectionConnector from './components/SectionConnector';
import Loader from './components/Loader';
import Projects from './components/Projects';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setFadeIn(true), 10); 
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={`transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <GalaxyBackground />
      <GridBackground />
      <Navbar />
      <Body />
      <SectionConnector />
      <About />
      <Skills />
      <SectionConnector />
      <Projects />
      <SectionConnector />
      <ReachMe />
    </div>
  );
}

export default App;
