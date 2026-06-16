import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "16px 48px" : "28px 48px",
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,200,200,0.08)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ 
            background: "none", 
            border: "none", 
            cursor: "pointer", 
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left"
          }}
        >
          <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "18px", fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.12em" }}>
            ALAA SHERIF
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#888888", letterSpacing: "0.25em", marginTop: "4px" }}>
            INTERIOR DESIGNER & CG ARTIST
          </div>
        </button>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: "#C8C8C8",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "4px 0",
                position: "relative",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C8C8C8")}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            style={{
              background: "transparent",
              border: "1px solid rgba(200,200,200,0.3)",
              color: "#C8C8C8",
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.25em",
              padding: "10px 24px",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
              e.currentTarget.style.color = "#0A0A0A";
              e.currentTarget.style.borderColor = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#C8C8C8";
              e.currentTarget.style.borderColor = "rgba(200,200,200,0.3)";
            }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          className="mobile-menu-btn"
        >
          <span style={{ width: 24, height: 1, background: "#FFFFFF", display: "block", transition: "all 0.3s" }} />
          <span style={{ width: 16, height: 1, background: "#FFFFFF", display: "block", transition: "all 0.3s" }} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#0A0A0A",
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{ position: "absolute", top: 28, right: 28, background: "none", border: "none", color: "#FFFFFF", fontSize: "24px", cursor: "pointer" }}
            >
              ✕
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "36px",
                  color: "#FFFFFF",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          nav > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </>
  );
}
