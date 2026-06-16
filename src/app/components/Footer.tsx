import { motion } from "motion/react";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Instagram", href: "#" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "#060606",
      borderTop: "1px solid rgba(200,200,200,0.06)",
      padding: "80px 0 40px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Large background text */}
      <div style={{
        position: "absolute",
        bottom: "-60px",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'Bodoni Moda', serif",
        fontSize: "clamp(80px, 12vw, 180px)",
        fontWeight: 700,
        color: "rgba(255,255,255,0.015)",
        whiteSpace: "nowrap",
        userSelect: "none",
        letterSpacing: "0.1em",
        pointerEvents: "none",
      }}>
        ALAA SHERIF
      </div>

      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 80px",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Top section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "80px",
          marginBottom: "80px",
          paddingBottom: "80px",
          borderBottom: "1px solid rgba(200,200,200,0.06)",
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "28px",
              fontWeight: 600,
              color: "#FFFFFF",
              letterSpacing: "0.1em",
              marginBottom: "8px",
            }}>
              ALAA SHERIF
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              color: "#A0A0A0",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}>
              Interior Designer & CG Artist
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: "#A0A0A0",
              lineHeight: 1.9,
              maxWidth: "360px",
              marginBottom: "32px",
            }}>
              Creating immersive interiors through design, visualization, and architectural storytelling across Egypt, UAE, and KSA.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: "16px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "9px",
                    color: "#A0A0A0",
                    letterSpacing: "0.2em",
                    border: "1px solid rgba(200,200,200,0.1)",
                    padding: "8px 14px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C8C8C8";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(200,200,200,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#555";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(200,200,200,0.1)";
                  }}
                >
                  {s.label.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              color: "#888",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}>
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    color: "#A0A0A0",
                    letterSpacing: "0.05em",
                    padding: 0,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C8C8C8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              color: "#888",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}>
              Get In Touch
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Email", value: "alaa.sherif@email.com" },
                { label: "Location", value: "Cairo, Egypt" },
                { label: "Availability", value: "Open to Projects" },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#A0A0A0", letterSpacing: "0.2em", marginBottom: "3px" }}>
                    {item.label.toUpperCase()}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#E0E0E0" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            color: "#888",
            letterSpacing: "0.1em",
            lineHeight: 1.6,
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px"
          }}>
            <span>© 2026 Alaa Sherif. All rights reserved.</span>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.3)" }}></span>
            <span>
              <span style={{ opacity: 0.7 }}>Design & Developed By </span>
              <a 
                href="https://www.linkedin.com/in/aurangzebsunny/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#C0A060", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E0C080")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C0A060")}
              >
                Aurangzeb Sunny
              </a>
            </span>
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            color: "#888",
            letterSpacing: "0.1em",
          }}>
            Interior Designer & CG Artist
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div { padding: 0 20px !important; }
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            margin-bottom: 48px !important;
            padding-bottom: 48px !important;
          }
          footer > div > div:last-child { flex-direction: column; gap: 8px; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
