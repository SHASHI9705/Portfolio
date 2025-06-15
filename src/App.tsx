import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import GridBackground from './components/GridBackground';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';
import ReachMe from './components/ReachMe';
import SectionConnector from './components/SectionConnector';

function App() {
  return (
    <>
      <GalaxyBackground />
      <GridBackground />
      <Navbar />
      <Body />
      <SectionConnector />
      <About />
      <Skills />
      <SectionConnector />
      <ReachMe />
    </>
  );
}

export default App;
