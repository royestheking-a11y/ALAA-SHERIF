import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const categories = ["All", "Residential", "Commercial", "Hospitality", "Visualization"];

const projects = [
  {
    id: 1,
    title: "Al Noor Residence",
    location: "Cairo, Egypt",
    year: "2025",
    category: "Residential",
    size: "large",
    image: "https://images.unsplash.com/photo-1700474568247-2bf81611b293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description: "Luxury apartment with bespoke joinery and handcrafted stone accents.",
  },
  {
    id: 2,
    title: "Skyline Penthouse",
    location: "Dubai, UAE",
    year: "2024",
    category: "Residential",
    size: "small",
    image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    description: "Contemporary penthouse with panoramic city views.",
  },
  {
    id: 3,
    title: "Villa Serena",
    location: "Riyadh, KSA",
    year: "2024",
    category: "Residential",
    size: "small",
    image: "https://images.unsplash.com/photo-1724582586458-a51791349977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    description: "Sprawling villa with indoor-outdoor living and travertine finishes.",
  },
  {
    id: 4,
    title: "The Dark Suite",
    location: "Dubai, UAE",
    year: "2024",
    category: "Hospitality",
    size: "medium",
    image: "https://images.unsplash.com/photo-1552858725-a19e7fcd3ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description: "Boutique hotel suite with moody atmospheric design.",
  },
  {
    id: 5,
    title: "Noir Bedroom Render",
    location: "Cairo, Egypt",
    year: "2025",
    category: "Visualization",
    size: "medium",
    image: "https://images.unsplash.com/photo-1663811397207-418a92396ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description: "Photorealistic CG render showcasing material mastery.",
  },
  {
    id: 6,
    title: "Prestige Office Tower",
    location: "Cairo, Egypt",
    year: "2024",
    category: "Commercial",
    size: "small",
    image: "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    description: "Corporate executive floors with refined material palette.",
  },
  {
    id: 7,
    title: "Bosphorus Living Room",
    location: "Dubai, UAE",
    year: "2023",
    category: "Visualization",
    size: "large",
    image: "https://images.unsplash.com/photo-1640357897497-599b4fc84f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description: "Monochromatic minimalist render with dramatic natural light.",
  },
  {
    id: 8,
    title: "Chandelier Restaurant",
    location: "Riyadh, KSA",
    year: "2023",
    category: "Hospitality",
    size: "small",
    image: "https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    description: "Fine dining space with statement lighting and rich velvets.",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const sizeMap = {
    large: { gridColumn: "span 2", aspectRatio: "16/9" },
    medium: { gridColumn: "span 1", aspectRatio: "5/4" },
    small: { gridColumn: "span 1", aspectRatio: "5/4" },
  };

  const size = sizeMap[project.size as keyof typeof sizeMap];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: size.gridColumn,
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        background: "#111",
        aspectRatio: size.aspectRatio,
      }}
    >
      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(to top, rgba(10,10,10,${hovered ? "0.9" : "0.5"}) 0%, transparent 60%)`,
        transition: "background 0.4s ease",
      }} />

      {/* Category badge */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        fontFamily: "'Inter', sans-serif",
        fontSize: "9px",
        color: "#888",
        letterSpacing: "0.25em",
        border: "1px solid rgba(200,200,200,0.2)",
        padding: "6px 12px",
        background: "rgba(10,10,10,0.6)",
        backdropFilter: "blur(8px)",
      }}>
        {project.category.toUpperCase()}
      </div>

      {/* Content */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "32px",
      }}>
        <motion.div
          animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "#888",
            marginBottom: "8px",
          }}
        >
          {project.description}
        </motion.div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "22px",
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "0.02em",
            }}>
              {project.title}
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              color: "#A0A0A0",
              letterSpacing: "0.1em",
              marginTop: "4px",
            }}>
              {project.location} — {project.year}
            </div>
          </div>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: "18px",
            }}
          >
            →
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        background: "#0A0A0A",
        padding: "160px 0",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 80px" }}>
        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "60px",
        }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em" }}>03 — PROJECTS</span>
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
              Featured<br />
              <span style={{ fontStyle: "italic", color: "#888" }}>Portfolio</span>
            </motion.h2>
          </div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "flex-end" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? "#FFFFFF" : "transparent",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "#FFFFFF" : "rgba(200,200,200,0.15)",
                  color: activeCategory === cat ? "#0A0A0A" : "#666",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  padding: "8px 16px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects > div > div:last-child { grid-template-columns: 1fr !important; }
          #projects > div > div:last-child > div { grid-column: span 1 !important; }
          #projects > div { padding: 0 24px !important; }
          #projects > div > div:first-child { flex-direction: column; align-items: flex-start; gap: 32px; }
        }
      `}</style>
    </section>
  );
}
