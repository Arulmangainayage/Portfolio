import About from "./components/About.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Recognition from "./components/Recognition.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Skills from "./components/Skills.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Capabilities />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Recognition />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
