import { useEffect, useState } from "react";
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
import Resume from "./components/Resume.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Skills from "./components/Skills.jsx";
import { profile } from "./data/content";

const SITE_TITLE = "Arul Mangai Nayage S — AI & Data Engineer";

function readView() {
  return window.location.hash === "#resume" ? "resume" : "site";
}

export default function App() {
  const [view, setView] = useState(readView);

  useEffect(() => {
    const onHashChange = () => setView(readView());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.title =
      view === "resume" ? `Résumé — ${profile.name}` : SITE_TITLE;
  }, [view]);

  // Keep hash navigation working when returning from the résumé view, since the
  // target section mounts after the browser has already handled the hash change.
  useEffect(() => {
    if (view === "resume") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return undefined;
    }

    const id = window.location.hash.slice(1);
    if (!id || id === "home") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [view]);

  if (view === "resume") {
    return <Resume />;
  }

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
