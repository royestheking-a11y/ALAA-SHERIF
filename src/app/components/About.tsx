import { useRef } from "react";
import { motion, useInView } from "motion/react";

const alaaImage = "/alaa-sherif.png";
const referenceImage = "/reference-design.png";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects" },
  { value: "3", label: "Countries" },
  { value: "100%", label: "Dedication" },
];

function CounterStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay }}
        style={{
          fontFamily: "'Bodoni Moda', serif",
          fontSize: "clamp(36px, 4vw, 56px)",
          fontWeight: 600,
          color: "#FFFFFF",
          lineHeight: 1,
          marginBottom: "10px",
        }}
      >
        {value}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          color: "#A0A0A0",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </motion.div>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
        top: 0,
        right: 0,
        width: "40%",
        height: "100%",
        background: "radial-gradient(ellipse at top right, rgba(200,200,200,0.03) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "100px",
        alignItems: "center",
      }}>
        {/* Left: Image — order:2 on mobile so text shows first */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="about-image-col"
          style={{ position: "relative" }}
        >
          {/* Decorative frame */}
          <div style={{
            position: "absolute",
            top: "-24px",
            left: "-24px",
            right: "24px",
            bottom: "24px",
            border: "1px solid rgba(200,200,200,0.12)",
            zIndex: 0,
          }} />

          <div style={{
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
            aspectRatio: "4/5",
          }}>
            <img
              src={alaaImage}
              alt="Alaa Sherif — Interior Designer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                filter: "brightness(0.9) contrast(1.05)",
              }}
            />
            {/* Overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom right, rgba(10,10,10,0.2), transparent)",
            }} />
          </div>



          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: "30px",
              right: "-20px",
              zIndex: 2,
              background: "rgba(10,10,10,0.85)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(200,200,200,0.12)",
              padding: "20px 24px",
            }}
          >
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#A0A0A0", letterSpacing: "0.3em", marginBottom: "4px" }}>SENIOR AT</div>
            <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "14px", color: "#FFFFFF" }}>AMSAD Associates</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#A0A0A0", letterSpacing: "0.15em", marginTop: "2px" }}>Cairo, Egypt</div>
          </motion.div>
        </motion.div>

        {/* Right: Content — order:1 on mobile so text shows first */}
        <div className="about-text-col">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}
          >
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              color: "#C0A060",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}>
              01 — About
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(200,200,200,0.12)" }} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "clamp(32px, 3.5vw, 52px)",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: "32px",
            }}
          >
            Designing Spaces<br />
            <span style={{ fontStyle: "italic", color: "#C8C8C8" }}>That Tell Stories</span>
          </motion.h2>

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "#888888",
              lineHeight: 1.9,
              marginBottom: "24px",
            }}>
              I'm Alaa Sherif, a Senior Interior Designer and CG Artist with over 4 years of experience crafting luxury spaces that merge aesthetic precision with spatial functionality.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "#A0A0A0",
              lineHeight: 1.9,
              marginBottom: "40px",
            }}>
              From concept sketches to photorealistic renders and walkthrough animations, I bring complete design visions to life — working across Egypt, UAE, and the Kingdom of Saudi Arabia for residential, commercial, and hospitality clients.
            </p>
          </motion.div>

          {/* Expertise tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "56px" }}
          >
            {["Interior Design", "3D Visualization", "CG Art", "Architectural Rendering", "Space Planning"].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  color: "#888",
                  letterSpacing: "0.15em",
                  border: "1px solid rgba(200,200,200,0.15)",
                  padding: "8px 16px",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(200,200,200,0.1)",
            }}
          >
            {stats.map((stat, i) => (
              <CounterStat key={stat.label} {...stat} delay={0.9 + i * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
            gap: 48px !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .about-image-col { order: 2; }
          .about-text-col  { order: 1; }
        }
      `}</style>
    </section>
  );
}
