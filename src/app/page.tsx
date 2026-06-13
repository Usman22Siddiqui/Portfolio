import ScrollytellingSection from "@/components/ScrollytellingSection";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-[#08080a] min-h-screen selection:bg-accent/30 selection:text-white overflow-x-clip">
      <Navbar />

      {/* Scrollytelling Section */}
      <ScrollytellingSection />

      {/* Content Sections */}
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />

      <footer className="relative z-20 py-16 text-center text-white/30 border-t border-white/5 bg-[#08080a]">
        <p className="text-sm">
          © {new Date().getFullYear()} Muhammad Usman Siddiqui.
        </p>
      </footer>
    </main>
  );
}
