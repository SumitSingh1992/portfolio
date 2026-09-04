import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillsGraph from "./components/SkillsGraph";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <section id="about-me">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <SkillsGraph />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
