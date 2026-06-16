import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const testimonials = [
  {
    quote: "Alaa transformed our penthouse into something beyond what we imagined. Her 3D renders were so precise that the finished space matched them perfectly. True mastery.",
    name: "Khalid Al-Rashid",
    role: "Private Client",
    location: "Dubai, UAE",
    rating: 5,
  },
  {
    quote: "Working with Alaa was an exceptional experience. She understood our brand identity immediately and translated it into a restaurant space that our guests absolutely love.",
    name: "Omar Mansour",
    role: "Restaurant Owner",
    location: "Riyadh, KSA",
    rating: 5,
  },
  {
    quote: "The level of detail in her visualizations is extraordinary. We could walk through our home virtually before a single wall was built. The final result exceeded every expectation.",
    name: "Rania Hassan",
    role: "Villa Client",
    location: "Cairo, Egypt",
    rating: 5,
  },
  {
    quote: "Alaa brings both technical precision and artistic vision to her work. Our office space became a landmark for our clients. She elevated everything about our workspace.",
    name: "Ahmed Al-Farsi",
    role: "CEO, Tech Firm",
    location: "Abu Dhabi, UAE",
    rating: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#0A0A0A",
        padding: "160px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "40%",
        background: "linear-gradient(to right, rgba(200,200,200,0.02) 0%, transparent 100%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em" }}>07 — TESTIMONIALS</span>
            <div style={{ width: "40px", height: "1px", background: "rgba(200,200,200,0.15)" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "clamp(36px, 4vw, 60px)",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.05,
            }}
          >
            Client<br />
            <span style={{ fontStyle: "italic", color: "#888" }}>Voices</span>
          </motion.h2>
        </div>

        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Quote area */}
          <div>
            {/* Large quotemark */}
            <div style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "120px",
              color: "rgba(200,200,200,0.08)",
              lineHeight: 0.7,
              marginBottom: "32px",
              userSelect: "none",
            }}>
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(20px, 2.5vw, 30px)",
                  fontWeight: 400,
                  color: "#C8C8C8",
                  lineHeight: 1.6,
                  letterSpacing: "0.01em",
                  marginBottom: "48px",
                  fontStyle: "italic",
                }}>
                  {testimonials[active].quote}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid rgba(200,200,200,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "18px",
                    color: "#C8C8C8",
                    background: "rgba(200,200,200,0.05)",
                  }}>
                    {testimonials[active].name.charAt(0)}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Bodoni Moda', serif",
                      fontSize: "16px",
                      color: "#FFFFFF",
                      marginBottom: "2px",
                    }}>
                      {testimonials[active].name}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      color: "#A0A0A0",
                      letterSpacing: "0.15em",
                    }}>
                      {testimonials[active].role} — {testimonials[active].location}
                    </div>
                  </div>
                  {/* Stars */}
                  <div style={{ marginLeft: "auto", color: "#C8C8C8", letterSpacing: "2px", fontSize: "12px" }}>
                    {"★".repeat(testimonials[active].rating)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  background: i === active ? "rgba(200,200,200,0.05)" : "transparent",
                  border: i === active ? "1px solid rgba(200,200,200,0.2)" : "1px solid rgba(200,200,200,0.05)",
                  color: i === active ? "#FFFFFF" : "#555",
                  padding: "20px 24px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "15px",
                  marginBottom: "4px",
                }}>
                  {t.name}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  color: i === active ? "#888" : "#444",
                  letterSpacing: "0.1em",
                }}>
                  {t.location}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
