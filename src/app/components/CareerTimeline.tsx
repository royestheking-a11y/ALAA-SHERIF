import { useRef } from "react";
import { motion, useInView } from "motion/react";

const timeline = [
  {
    period: "2025 — Present",
    role: "Senior Interior Designer",
    company: "AMSAD Architectural Associates",
    location: "Cairo, Egypt",
    description: "Leading luxury residential and commercial projects, overseeing design direction from concept to delivery.",
    highlight: true,
  },
  {
    period: "2024 — 2025",
    role: "Interior Design Architect",
    company: "Aura",
    location: "Cairo, Egypt",
    description: "Developed architectural visualization packages and interior design concepts for high-net-worth clients.",
    highlight: false,
  },
  {
    period: "2022 — 2024",
    role: "Designer",
    company: "One Sixty One Interiors",
    location: "Cairo, Egypt",
    description: "Delivered end-to-end interior design solutions for residential and boutique hospitality projects.",
    highlight: false,
  },
  {
    period: "Ongoing",
    role: "Freelance Designer & CG Artist",
    company: "Independent",
    location: "Egypt • UAE • KSA",
    description: "International freelance practice serving clients across the GCC with bespoke design and photorealistic visualization.",
    highlight: false,
  },
];

export function CareerTimeline() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="career"
      ref={ref}
      style={{
        background: "#0D0D0D",
        padding: "160px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          marginBottom: "100px",
          alignItems: "end",
        }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em" }}>06 — CAREER</span>
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
              Career<br />
              <span style={{ fontStyle: "italic", color: "#888" }}>Journey</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#A0A0A0",
              lineHeight: 1.9,
            }}
          >
            A focused path through some of Egypt's most respected design studios, building expertise in luxury residential and commercial interiors.
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              left: "0",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, rgba(200,200,200,0.2), rgba(200,200,200,0.05))",
              transformOrigin: "top",
            }}
          />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "60px",
                paddingLeft: "32px",
                paddingBottom: i < timeline.length - 1 ? "64px" : "0",
                position: "relative",
              }}
            >
              {/* Dot */}
              <div style={{
                position: "absolute",
                left: "-4.5px",
                top: "8px",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: item.highlight ? "#C8C8C8" : "#333",
                border: item.highlight ? "2px solid rgba(200,200,200,0.3)" : "1px solid #444",
              }} />

              {/* Period */}
              <div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  color: item.highlight ? "#C8C8C8" : "#555",
                  letterSpacing: "0.15em",
                }}>
                  {item.period}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: "24px 32px",
                border: item.highlight ? "1px solid rgba(200,200,200,0.15)" : "1px solid rgba(200,200,200,0.05)",
                background: item.highlight ? "rgba(200,200,200,0.03)" : "transparent",
              }}>
                <div style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  marginBottom: "6px",
                }}>
                  {item.role}
                </div>
                <div style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  marginBottom: "16px",
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: item.highlight ? "#C8C8C8" : "#666",
                  }}>
                    {item.company}
                  </span>
                  <span style={{ color: "#A0A0A0", fontSize: "12px" }}>—</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    color: "#A0A0A0",
                    letterSpacing: "0.1em",
                  }}>
                    {item.location}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  color: "#A0A0A0",
                  lineHeight: 1.8,
                }}>
                  {item.description}
                </p>
                {item.highlight && (
                  <div style={{
                    display: "inline-block",
                    marginTop: "16px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "9px",
                    color: "#C8C8C8",
                    letterSpacing: "0.25em",
                    border: "1px solid rgba(200,200,200,0.3)",
                    padding: "6px 14px",
                  }}>
                    CURRENT ROLE
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #career > div { padding: 0 24px !important; }
          #career > div > div:first-child { grid-template-columns: 1fr !important; }
          #career > div > div:last-child > div { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
