import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, MapPin, Link2 } from "lucide-react";

const projectTypes = [
  "Residential Design",
  "Commercial Design",
  "Hospitality",
  "3D Visualization",
  "Walkthrough Animation",
  "Design Consultation",
];

const budgetRanges = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Discuss with designer",
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(200,200,200,0.15)",
    color: "#FFFFFF",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    padding: "16px 0",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "10px",
    color: "#A0A0A0",
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "8px",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "#060606",
        padding: "160px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "45%",
        backgroundImage: `url("https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.12,
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 80px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "120px",
          alignItems: "start",
        }}>
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em" }}>09 — CONTACT</span>
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
                marginBottom: "32px",
              }}
            >
              Start Your<br />
              <span style={{ fontStyle: "italic", color: "#888" }}>Project</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#A0A0A0",
                lineHeight: 1.9,
                marginBottom: "64px",
              }}
            >
              Ready to transform your space into a story? Let's discuss your vision. Whether you're based in Egypt, the UAE, or Saudi Arabia — I'm available for projects worldwide.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {[
                { icon: <Mail size={18} color="#C0A060" />, label: "Email", value: "alaa.sherif@email.com" },
                { icon: <MapPin size={18} color="#C0A060" />, label: "Location", value: "Cairo, Egypt" },
                { icon: <Link2 size={18} color="#C0A060" />, label: "LinkedIn", value: "linkedin.com/in/alaa-sherif-403350255", href: "https://www.linkedin.com/in/alaa-sherif-403350255/" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "20px", alignItems: "center", paddingBottom: "24px", borderBottom: "1px solid rgba(200,200,200,0.05)" }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid rgba(200,200,200,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#A0A0A0", letterSpacing: "0.25em", marginBottom: "4px" }}>
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#C8C8C8" }}>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ color: "#C8C8C8", textDecoration: "none", transition: "color 0.3s" }} 
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")} 
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#C8C8C8")}
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: "48px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid rgba(200,200,200,0.1)",
                padding: "12px 20px",
              }}
            >
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 8px rgba(74,222,128,0.5)" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#888", letterSpacing: "0.15em" }}>
                Available for new projects
              </span>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "80px 48px",
                  border: "1px solid rgba(200,200,200,0.1)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "48px", color: "#C8C8C8", marginBottom: "24px" }}>✓</div>
                <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "24px", color: "#FFFFFF", marginBottom: "16px" }}>
                  Inquiry Received
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#A0A0A0", lineHeight: 1.8 }}>
                  Thank you for reaching out. I'll review your project details and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                {/* Name & Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      style={{ ...inputStyle, fontSize: "14px" }}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#C8C8C8")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "rgba(200,200,200,0.15)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      style={{ ...inputStyle, fontSize: "14px" }}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#C8C8C8")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "rgba(200,200,200,0.15)")}
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label style={labelStyle}>Project Type</label>
                  <select
                    required
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    style={{
                      ...inputStyle,
                      cursor: "pointer",
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6'%3E%3Cpath d='M0 0l6 6 6-6z' fill='%23888'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 8px center",
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C8C8C8")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(200,200,200,0.15)")}
                  >
                    <option value="" style={{ background: "#0A0A0A" }}>Select type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#0A0A0A" }}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label style={labelStyle}>Budget Range</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    style={{
                      ...inputStyle,
                      cursor: "pointer",
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6'%3E%3Cpath d='M0 0l6 6 6-6z' fill='%23888'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 8px center",
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#C8C8C8")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(200,200,200,0.15)")}
                  >
                    <option value="" style={{ background: "#0A0A0A" }}>Select budget</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} style={{ background: "#0A0A0A" }}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Project Brief</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your vision, space, and timeline..."
                    style={{
                      ...inputStyle,
                      resize: "none",
                      borderBottom: "none",
                      border: "1px solid rgba(200,200,200,0.15)",
                      padding: "16px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(200,200,200,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(200,200,200,0.15)")}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    background: "#FFFFFF",
                    border: "none",
                    color: "#0A0A0A",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    padding: "20px 48px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#C8C8C8"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#FFFFFF"; }}
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div { grid-template-columns: 1fr !important; gap: 60px !important; padding: 0 24px !important; }
          form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
