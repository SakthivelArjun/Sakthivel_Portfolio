import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="relative">
        {/* Sticky Hero Background Component */}
        <div className="sticky top-0 w-full h-screen z-0">
          <Hero />
        </div>

        {/* Sliding Foreground Content */}
        <div className="relative z-10 bg-background shadow-[0_-10px_30px_rgba(0,0,0,0.5)] border-t border-[var(--color-border-rgba)]">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
