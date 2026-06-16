import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: "50+", label: "Projects Delivered", sub: "Across 3 countries" },
  { value: "4+", label: "Years Experience", sub: "In luxury design" },
  { value: "3", label: "Countries Served", sub: "Egypt · UAE · KSA" },
  { value: "100%", label: "Client Focus", sub: "Every single project" },
];

export function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#0D0D0D",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(200,200,200,0.04)",
        borderBottom: "1px solid rgba(200,200,200,0.04)",
      }}
    >
      {/* Decorative lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(200,200,200,0.12), transparent)",
          transformOrigin: "left",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: "60px 40px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(200,200,200,0.06)" : "none",
                position: "relative",
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "clamp(48px, 5vw, 80px)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 1,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}>
                {stat.value}
              </div>

              {/* Label */}
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                color: "#888",
                letterSpacing: "0.08em",
                marginBottom: "8px",
              }}>
                {stat.label}
              </div>

              {/* Sub */}
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                color: "#A0A0A0",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}>
                {stat.sub}
              </div>

              {/* Decorative accent */}
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "40px" } : {}}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "1px",
                  background: "rgba(200,200,200,0.2)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: repeat(2, 1fr) !important; padding: 0 24px !important; }
          section > div > div > div { border-right: none !important; border-bottom: 1px solid rgba(200,200,200,0.06) !important; }
        }
      `}</style>
    </section>
  );
}
