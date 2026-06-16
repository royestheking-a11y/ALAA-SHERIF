import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const services = [
  {
    number: "01",
    title: "Interior Design",
    description: "Complete spatial transformation with meticulous attention to material selection, lighting design, and functional flow.",
    tags: ["Space Planning", "Concept Development", "Material Selection"],
    icon: "◈",
  },
  {
    number: "02",
    title: "3D Visualization",
    description: "Photorealistic rendering that brings your design vision to life before a single wall is painted or tile is laid.",
    tags: ["3ds Max", "Corona Render", "V-Ray"],
    icon: "◎",
  },
  {
    number: "03",
    title: "Residential Design",
    description: "Luxurious living environments tailored to lifestyle — from intimate apartments to sprawling villas.",
    tags: ["Apartments", "Villas", "Luxury Homes"],
    icon: "⬡",
  },
  {
    number: "04",
    title: "Commercial Design",
    description: "Brand-aligned commercial spaces that balance functionality with impactful visual identity.",
    tags: ["Offices", "Restaurants", "Retail"],
    icon: "◫",
  },
  {
    number: "05",
    title: "Walkthrough Animation",
    description: "Cinematic architectural animations that immerse clients in the finished space before construction begins.",
    tags: ["Architectural Animation", "360° Views", "Virtual Tours"],
    icon: "◉",
  },
  {
    number: "06",
    title: "Design Consultation",
    description: "Expert design guidance for clients across Egypt, UAE, and KSA — both remotely and on-site.",
    tags: ["Remote", "Local", "Ongoing Support"],
    icon: "◈",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "48px 40px",
        border: `1px solid ${hovered ? "rgba(200,200,200,0.25)" : "rgba(200,200,200,0.08)"}`,
        background: hovered ? "rgba(255,255,255,0.03)" : "transparent",
        cursor: "default",
        transition: "all 0.4s ease",
        overflow: "hidden",
      }}
    >
      {/* Hover accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #C8C8C8, transparent)",
          transformOrigin: "left",
        }}
      />

      {/* Number */}
      <div style={{
        fontFamily: "'Bodoni Moda', serif",
        fontSize: "11px",
        color: hovered ? "#C8C8C8" : "#333",
        letterSpacing: "0.3em",
        marginBottom: "24px",
        transition: "color 0.3s",
      }}>
        {service.number}
      </div>

      {/* Icon */}
      <div style={{
        fontSize: "24px",
        color: hovered ? "#C8C8C8" : "#444",
        marginBottom: "20px",
        transition: "color 0.3s",
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Bodoni Moda', serif",
        fontSize: "22px",
        fontWeight: 500,
        color: "#FFFFFF",
        marginBottom: "16px",
        letterSpacing: "0.02em",
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "13px",
        color: "#A0A0A0",
        lineHeight: 1.8,
        marginBottom: "28px",
      }}>
        {service.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              color: hovered ? "#888" : "#555",
              letterSpacing: "0.2em",
              border: `1px solid ${hovered ? "rgba(200,200,200,0.2)" : "rgba(200,200,200,0.1)"}`,
              padding: "4px 10px",
              transition: "all 0.3s",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Expertise() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="expertise"
      ref={ref}
      style={{
        background: "#0D0D0D",
        padding: "160px 0",
        position: "relative",
      }}
    >
      {/* Top border */}
      <div style={{ position: "absolute", top: 0, left: "80px", right: "80px", height: "1px", background: "rgba(200,200,200,0.06)" }} />

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
              transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em" }}>02 — EXPERTISE</span>
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
              Services &<br />
              <span style={{ fontStyle: "italic", color: "#888" }}>Specializations</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#A0A0A0",
              lineHeight: 1.9,
              maxWidth: "440px",
            }}
          >
            A full-spectrum design practice — from the first sketch to the final photorealistic render, delivering spaces that are as functional as they are breathtaking.
          </motion.p>
        </div>

        {/* Services grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "rgba(200,200,200,0.05)",
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #expertise > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
          #expertise > div > div:first-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          #expertise > div > div:last-child { grid-template-columns: 1fr !important; }
          #expertise > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
