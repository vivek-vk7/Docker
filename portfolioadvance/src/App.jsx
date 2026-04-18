import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="app-shell">
    <div className="background-orb orb-one" />
    <div className="background-orb orb-two" />
    <div className="background-grid" />

    <Navbar />

    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
    </main>

    <Footer />
  </div>
);

export default App;
