import { useRef } from "react";
import { motion, useInView } from "motion/react";

const words = ["Every", "space", "has", "a", "story."];
const words2 = ["Through", "design", "and", "visualization,"];
const words3 = ["I", "transform", "concepts", "into"];
const words4 = ["immersive", "experiences."];

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#060606",
        padding: "180px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("https://images.unsplash.com/photo-1640357897497-599b4fc84f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.04,
        filter: "grayscale(100%)",
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at center, rgba(6,6,6,0.4) 0%, rgba(6,6,6,0.95) 100%)",
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 80px",
        position: "relative",
        zIndex: 1,
        textAlign: "center",
      }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "80px" }}
        >
          <div style={{ width: "60px", height: "1px", background: "rgba(200,200,200,0.15)" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em" }}>DESIGN PHILOSOPHY</span>
          <div style={{ width: "60px", height: "1px", background: "rgba(200,200,200,0.15)" }} />
        </motion.div>

        {/* Large quote */}
        <div style={{ overflow: "hidden" }}>
          {[words, words2, words3, words4].map((line, lineIdx) => (
            <div key={lineIdx} style={{ display: "flex", gap: "clamp(12px, 2vw, 24px)", justifyContent: "center", flexWrap: "wrap", marginBottom: "8px" }}>
              {line.map((word, wordIdx) => (
                <motion.span
                  key={wordIdx}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.3 + lineIdx * 0.15 + wordIdx * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "clamp(36px, 5vw, 72px)",
                    fontWeight: 500,
                    color: lineIdx === 0 ? "#FFFFFF" : "#888888",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                    display: "inline-block",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          ))}
        </div>

        {/* Italic addition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            marginTop: "24px",
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "clamp(24px, 3vw, 48px)",
            fontStyle: "italic",
            color: "#C8C8C8",
          }}
        >
          Where aesthetics and functionality coexist.
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            marginTop: "80px",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, transparent, rgba(200,200,200,0.3))" }} />
          <div style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "20px",
            color: "#C8C8C8",
            letterSpacing: "0.1em",
          }}>
            Alaa Sherif
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "9px",
            color: "#A0A0A0",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}>
            Senior Interior Designer & CG Artist
          </div>
        </motion.div>
      </div>
    </section>
  );
}
