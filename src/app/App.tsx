import { useState, useEffect } from "react";
import { motion } from "motion/react";

import { Preloader } from "./components/Preloader";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Projects } from "./components/Projects";
import { DesignProcess } from "./components/DesignProcess";
import { Skills } from "./components/Skills";
import { CareerTimeline } from "./components/CareerTimeline";
import { Philosophy } from "./components/Philosophy";
import { Testimonials } from "./components/Testimonials";
import { Materials } from "./components/Materials";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [dot, setDot] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setDot({ x: e.clientX, y: e.clientY });
    };
    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("button, a, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* Large ring */}
      <motion.div
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: isHovering ? 1.6 : 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.5 }}
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          border: "1px solid rgba(200,200,200,0.3)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          mixBlendMode: "difference",
        }}
      />
      {/* Dot */}
      <motion.div
        animate={{ x: dot.x - 3, y: dot.y - 3 }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        style={{
          position: "fixed",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#FFFFFF",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{
      background: "#0A0A0A",
      minHeight: "100vh",
      width: "100vw",
      maxWidth: "100%",
      overflowX: "hidden",
      cursor: "none",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Preloader — sits on top */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Main content — always mounted so 3D/fonts warm up during preloader */}
      <motion.div
        key="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ visibility: loaded ? "visible" : "hidden" }}
      >
            <main>
              <Hero />
              <About />
              <Expertise />
              <Projects />
              <DesignProcess />
              <Achievements />
              <Philosophy />
              <Skills />
              <CareerTimeline />
              <Testimonials />
              <Materials />
              <Contact />
            </main>
            <Footer />
      </motion.div>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; cursor: none !important; }
        html { scroll-behavior: smooth; }
        body { background: #0A0A0A; overflow-x: hidden; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        ::selection { background: rgba(200,200,200,0.15); color: #FFFFFF; }
        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: rgba(200,200,200,0.2); }
        input, select, textarea, button { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Bodoni Moda', serif; }
        option { color: #FFFFFF !important; }

        /* ── Global mobile resets ── */
        @media (max-width: 900px) {
          /* Hide desktop scroll indicator vertical text */
          [style*="writingMode"] { display: none !important; }

          /* About section */
          #about > div {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
            gap: 48px !important;
          }
          #about { padding: 80px 0 !important; }

          /* Expertise section */
          #expertise > div,
          #expertise > div > div { padding: 0 20px !important; }
          #expertise > div > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          /* Projects section */
          #projects > div { padding: 0 20px !important; }
          #projects > div > div {
            grid-template-columns: 1fr !important;
          }

          /* Process section */
          #process > div { padding: 0 20px !important; }
          #process > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          /* Skills section */
          #skills > div { padding: 0 20px !important; }
          #skills > div > div {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          /* Fix circular stats in skills */
          #skills [style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
          }

          /* Career timeline */
          #career > div { padding: 0 20px !important; }

          /* Materials section */
          #materials > div { padding: 0 20px !important; }
          #materials > div > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          /* Contact section */
          #contact > div { padding: 0 20px !important; }
          #contact > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          /* Testimonials */
          #testimonials > div { padding: 0 20px !important; }
          #testimonials > div > div {
            grid-template-columns: 1fr !important;
          }

          /* Achievements */
          #achievements > div { padding: 0 20px !important; }
          #achievements > div > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          /* Philosophy */
          #philosophy > div { padding: 0 20px !important; }

          /* Generic: any section with 80px horizontal padding */
          section > div[style*="padding: 0 80px"] { padding: 0 20px !important; }
          section > div[style*="padding: \"0 80px\""] { padding: 0 20px !important; }

          /* Reduce section vertical padding */
          section { padding-top: 80px !important; padding-bottom: 80px !important; }

          /* Stats grids — never let them go below 2 cols */
          [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }

          /* Expertise tags wrap nicely */
          [style*="flexWrap: wrap"] { flex-wrap: wrap !important; }
        }

        @media (max-width: 480px) {
          /* Extra small: single column everything */
          #skills [style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
          [style*="grid-template-columns: repeat(4"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
