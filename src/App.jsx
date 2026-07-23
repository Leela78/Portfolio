import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievement/Achievements";
import Certifications from "./components/Certifications/Certifiations";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <CodingProfiles />
      <Contact />
      <Footer />
    </>
  );
}

export default App;