import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skills = [
  { name: "3ds Max", level: 98, category: "3D" },
  { name: "AutoCAD", level: 95, category: "Technical" },
  { name: "Corona Render", level: 95, category: "Rendering" },
  { name: "V-Ray", level: 92, category: "Rendering" },
  { name: "Photoshop", level: 90, category: "Post-Production" },
  { name: "Revit", level: 85, category: "BIM" },
  { name: "InDesign", level: 80, category: "Presentation" },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={{ marginBottom: "32px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "18px",
            fontWeight: 500,
            color: "#FFFFFF",
          }}>
            {skill.name}
          </span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "9px",
            color: "#A0A0A0",
            letterSpacing: "0.2em",
            border: "1px solid rgba(200,200,200,0.1)",
            padding: "3px 8px",
          }}>
            {skill.category.toUpperCase()}
          </span>
        </div>
        <span style={{
          fontFamily: "'Bodoni Moda', serif",
          fontSize: "20px",
          color: "#C8C8C8",
        }}>
          {skill.level}
          <span style={{ fontSize: "12px", color: "#A0A0A0" }}>%</span>
        </span>
      </div>
      {/* Bar */}
      <div style={{
        height: "1px",
        background: "rgba(200,200,200,0.08)",
        position: "relative",
        overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            background: "linear-gradient(90deg, #555, #C8C8C8)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        background: "#0A0A0A",
        padding: "160px 0",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "120px",
          alignItems: "center",
        }}>
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em" }}>05 — SKILLS</span>
              <div style={{ width: "40px", height: "1px", background: "rgba(200,200,200,0.15)" }} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Software<br />
              <span style={{ fontStyle: "italic", color: "#888" }}>Expertise</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#A0A0A0",
                lineHeight: 1.9,
                marginBottom: "48px",
              }}
            >
              Mastery of the industry's most powerful tools — from technical drafting to cinematic visualization, ensuring every project is executed with precision.
            </motion.p>

            {/* Circular stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
                padding: "32px",
                border: "1px solid rgba(200,200,200,0.08)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {[
                { value: "7+", label: "Tools" },
                { value: "4+", label: "Years" },
                { value: "50+", label: "Projects" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center", padding: "20px" }}>
                  <div style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "32px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "9px",
                    color: "#A0A0A0",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — skill bars */}
          <div>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills > div > div { grid-template-columns: 1fr !important; gap: 60px !important; padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
