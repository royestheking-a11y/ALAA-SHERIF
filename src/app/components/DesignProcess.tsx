import { useRef } from "react";
import { motion, useInView } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Client Consultation",
    description: "Deep dive into your vision, lifestyle, and functional needs. Every great space begins with listening.",
  },
  {
    number: "02",
    title: "Concept",
    subtitle: "Moodboards & Vision",
    description: "Translating your brief into a cohesive design language through curated moodboards and concept sketches.",
  },
  {
    number: "03",
    title: "Planning",
    subtitle: "Space & Layout",
    description: "Detailed floor plans, furniture placement, and spatial flow optimization using AutoCAD and Revit.",
  },
  {
    number: "04",
    title: "Visualization",
    subtitle: "3D Renders",
    description: "Photorealistic renderings in 3ds Max with Corona Render that let you experience the space before it's built.",
  },
  {
    number: "05",
    title: "Refinement",
    subtitle: "Client Feedback",
    description: "Iterative design revisions until every detail aligns perfectly with your vision and expectations.",
  },
  {
    number: "06",
    title: "Delivery",
    subtitle: "Final Presentation",
    description: "A complete design package with all specifications, material boards, and technical drawings.",
  },
];

export function DesignProcess() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      style={{
        background: "#0D0D0D",
        padding: "160px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(rgba(200,200,200,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "24px" }}
          >
            <div style={{ width: "60px", height: "1px", background: "rgba(200,200,200,0.15)" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em" }}>04 — PROCESS</span>
            <div style={{ width: "60px", height: "1px", background: "rgba(200,200,200,0.15)" }} />
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
            Design <span style={{ fontStyle: "italic", color: "#888" }}>Process</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: "28px",
              left: "0",
              right: "0",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(200,200,200,0.15), transparent)",
              transformOrigin: "left",
            }}
          />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "2px",
          }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ padding: "0 16px" }}
              >
                {/* Step number circle */}
                <div style={{
                  width: "56px",
                  height: "56px",
                  border: "1px solid rgba(200,200,200,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "32px",
                  background: "#0D0D0D",
                  position: "relative",
                  zIndex: 1,
                }}>
                  <span style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "14px",
                    color: "#C8C8C8",
                    letterSpacing: "0.1em",
                  }}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  marginBottom: "6px",
                }}>
                  {step.title}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  color: "#C8C8C8",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}>
                  {step.subtitle}
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: "#A0A0A0",
                  lineHeight: 1.8,
                }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #process > div > div:last-child > div { grid-template-columns: repeat(3, 1fr) !important; }
          #process > div { padding: 0 40px !important; }
        }
        @media (max-width: 700px) {
          #process > div > div:last-child > div { grid-template-columns: repeat(2, 1fr) !important; }
          #process > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
