import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const materials = [
  {
    name: "Marble",
    type: "Natural Stone",
    description: "Calacatta and Carrara marble surfaces — timeless luxury in every vein.",
    image: "/premium_marble_1781536865883.png",
    accent: "#F0EDE8",
  },
  {
    name: "Travertine",
    type: "Natural Stone",
    description: "Warm earthy tones that bring organic texture to contemporary spaces.",
    image: "/premium_travertine_1781536881331.png",
    accent: "#E8E0D0",
  },
  {
    name: "Walnut Wood",
    type: "Timber",
    description: "Rich grain patterns and deep tones for bespoke furniture and joinery.",
    image: "/premium_walnut_1781536895844.png",
    accent: "#8B6F47",
  },
  {
    name: "Brushed Metal",
    type: "Metal",
    description: "Matte brass and brushed stainless for architectural hardware and fixtures.",
    image: "/premium_metal_1781536909346.png",
    accent: "#C0A060",
  },
  {
    name: "Smoked Glass",
    type: "Glass",
    description: "Tinted and lacquered glass panels for refined privacy and reflections.",
    image: "/premium_glass_1781536922904.png",
    accent: "#4A5568",
  },
];

export function Materials() {
  const [hovered, setHovered] = useState<number | null>(null);
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
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "end",
          marginBottom: "80px",
        }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em" }}>08 — MATERIALS</span>
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
              Material<br />
              <span style={{ fontStyle: "italic", color: "#888" }}>Palette</span>
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
            Materials are the soul of a space. Every texture, grain, and reflectance is selected with intentionality — building atmospheres that are felt before they are seen.
          </motion.p>
        </div>

        {/* Materials grid */}
        <div style={{
          display: "flex",
          gap: "2px",
          height: "480px",
        }}>
          {materials.map((material, i) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                flex: hovered === i ? 2.5 : 1,
                transition: "flex 0.5s cubic-bezier(0.22,1,0.36,1)",
                minWidth: 0,
              }}
            >
              {/* Background image */}
              <motion.div
                animate={{ scale: hovered === i ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${material.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Overlays */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(to top, rgba(10,10,10,${hovered === i ? "0.85" : "0.7"}) 0%, rgba(10,10,10,0.3) 100%)`,
                transition: "background 0.4s ease",
              }} />

              {/* Content */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "24px",
              }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  color: "#888",
                  letterSpacing: "0.25em",
                  marginBottom: "8px",
                }}>
                  {material.type.toUpperCase()}
                </div>
                <div style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  marginBottom: "8px",
                }}>
                  {material.name}
                </div>
                <motion.p
                  animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    color: "#888",
                    lineHeight: 1.7,
                  }}
                >
                  {material.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div:last-child { flex-wrap: wrap !important; height: auto !important; }
          section > div > div:last-child > div { flex: 1 1 calc(50% - 1px) !important; min-height: 200px; }
          section > div > div:first-child { grid-template-columns: 1fr !important; }
          section > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
