// @ts-nocheck
import { useEffect, useRef, useState, Suspense } from "react";
import { motion } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Hand } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1700474568247-2bf81611b293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMG1pbmltYWxpc3QlMjBkYXJrJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MTUzNDIwMXww&ixlib=rb-4.1.0&q=80&w=1920";

const stats = [
  { value: "4+", label: "YEARS EXP" },
  { value: "50+", label: "PROJECTS" },
  { value: "3", label: "COUNTRIES" },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

function LuxurySofa() {
  return (
    <group position={[0, -1.2, 0]}>
      <mesh position={[0, 0.18, 0.1]} castShadow receiveShadow>
        <RoundedBox args={[2.6, 0.35, 1.0]} radius={0.12} smoothness={4}>
          <meshStandardMaterial color="#1C1C1C" roughness={0.9} />
        </RoundedBox>
      </mesh>
      <mesh position={[0, 0.65, -0.42]} castShadow receiveShadow>
        <RoundedBox args={[2.6, 0.75, 0.28]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#1C1C1C" roughness={0.85} />
        </RoundedBox>
      </mesh>
      <mesh position={[-1.24, 0.48, 0.0]} castShadow>
        <RoundedBox args={[0.22, 0.55, 1.0]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#1C1C1C" roughness={0.85} />
        </RoundedBox>
      </mesh>
      <mesh position={[1.24, 0.48, 0.0]} castShadow>
        <RoundedBox args={[0.22, 0.55, 1.0]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#1C1C1C" roughness={0.85} />
        </RoundedBox>
      </mesh>
      {[[-1.1, -0.32], [1.1, -0.32], [-1.1, 0.32], [1.1, 0.32]].map(([x, z], i) => (
        <mesh key={i} position={[x, -0.12, z]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.24, 12]} />
          <meshStandardMaterial color="#B08840" metalness={0.95} roughness={0.15} />
        </mesh>
      ))}
    </group>
  );
}

function FloorLamp() {
  const glowRef = useRef(null);
  useFrame(({ clock }) => {
    if (glowRef.current) glowRef.current.intensity = 1.8 + Math.sin(clock.getElapsedTime() * 1.5) * 0.2;
  });
  return (
    <group position={[1.8, -1.2, -0.5]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.025, 0.025, 2.4, 12]} />
        <meshStandardMaterial color="#B08840" metalness={0.95} roughness={0.1} />
      </mesh>
      <mesh position={[0, 1.25, 0]} castShadow>
        <coneGeometry args={[0.32, 0.4, 32, 1, true]} />
        <meshStandardMaterial color="#F0E8D0" roughness={0.8} side={THREE.DoubleSide} />
      </mesh>
      <pointLight ref={glowRef} position={[0, 1.1, 0]} intensity={2.0} color="#FFD680" distance={4} decay={2} />
      <mesh position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#FFD680" emissive="#FFD680" emissiveIntensity={3} />
      </mesh>
      <mesh position={[0, -1.2, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.05, 32]} />
        <meshStandardMaterial color="#B08840" metalness={0.95} roughness={0.1} />
      </mesh>
    </group>
  );
}

function SideTable() {
  return (
    <group position={[-1.75, -1.2, -0.2]}>
      <mesh position={[0, 0.48, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.05, 32]} />
        <meshStandardMaterial color="#2A2218" roughness={0.6} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.0, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.12, 0.96, 16]} />
        <meshStandardMaterial color="#B08840" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.82, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.12, 0.6, 24]} />
        <meshStandardMaterial color="#E8E0D0" roughness={0.3} />
      </mesh>
    </group>
  );
}

function CoffeeTable() {
  return (
    <group position={[0, -1.2, 0.9]}>
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.3, 0.04, 0.65]} />
        <meshPhysicalMaterial color="#B8D0D8" transmission={0.9} roughness={0.05} metalness={0} thickness={0.1} ior={1.5} transparent opacity={0.7} />
      </mesh>
      {[[-0.58, 0.29], [0.58, 0.29], [-0.58, -0.29], [0.58, -0.29]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.2, z]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.42, 10]} />
          <meshStandardMaterial color="#B08840" metalness={0.95} roughness={0.12} />
        </mesh>
      ))}
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.76, 0]} receiveShadow>
      <planeGeometry args={[16, 16]} />
      <meshStandardMaterial color="#0D0D0D" roughness={0.3} metalness={0.1} />
    </mesh>
  );
}

function BackWall() {
  return (
    <group position={[0, 0, -2.5]}>
      <mesh receiveShadow>
        <planeGeometry args={[12, 7]} />
        <meshStandardMaterial color="#0A0A0A" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.5, 0.03]}>
        <planeGeometry args={[1.2, 0.8]} />
        <meshStandardMaterial color="#C0A060" roughness={0.4} metalness={0.3} />
      </mesh>
      <pointLight position={[-2.2, 0.6, 0.4]} intensity={0.9} color="#FFD680" distance={3} decay={2} />
      <pointLight position={[2.2, 0.6, 0.4]} intensity={0.9} color="#FFD680" distance={3} decay={2} />
    </group>
  );
}

function Scene() {
  const groupRef = useRef(null);
  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.12) * 0.3;
  });
  return (
    <group ref={groupRef}>
      <Floor />
      <BackWall />
      <LuxurySofa />
      <FloorLamp />
      <SideTable />
      <CoffeeTable />
      <mesh position={[-0.5, -0.82, 0.25]} rotation={[0.1, -0.3, 0.15]} castShadow>
        <RoundedBox args={[0.42, 0.12, 0.38]} radius={0.06} smoothness={4}>
          <meshStandardMaterial color="#8A7060" roughness={0.9} />
        </RoundedBox>
      </mesh>
    </group>
  );
}

export function Hero() {
  const isMobile = useIsMobile();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [isMobile]);

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const ThreeCanvas = (
    <Canvas
      camera={{ position: [0, 1.0, 5.8], fov: isMobile ? 52 : 44 }}
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[3, 6, 4]} intensity={1.3} castShadow shadow-mapSize={[1024, 1024]} shadow-camera-near={0.5} shadow-camera-far={20} shadow-camera-left={-6} shadow-camera-right={6} shadow-camera-top={6} shadow-camera-bottom={-6} />
      <pointLight position={[4, 4, 2]} intensity={0.5} color="#FFF5E0" />
      <pointLight position={[-4, 2, 3]} intensity={0.25} color="#C8D8E8" />
      <Suspense fallback={null}>
        <Scene />
        <Environment preset="apartment" />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2.1} minAzimuthAngle={-Math.PI / 3} maxAzimuthAngle={Math.PI / 3} />
    </Canvas>
  );

  // ── MOBILE LAYOUT ────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section style={{ position: "relative", minHeight: "100vh", background: "#0A0A0A", overflow: "hidden" }}>
        {/* BG image */}
        <div style={{ position: "absolute", inset: "-5%", backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.9)" }} />

        {/* Text content — FIRST on mobile */}
        <div style={{ position: "relative", zIndex: 5, padding: "60px 24px 0" }}>
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "rgba(192,160,96,0.6)" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#C0A060", letterSpacing: "0.3em", textTransform: "uppercase" }}>Interior Designer &amp; CG Artist</span>
          </motion.div>

          {/* Name */}
          <div style={{ overflow: "hidden", marginBottom: "4px" }}>
            <motion.h1 initial={{ y: 80 }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "clamp(52px, 14vw, 80px)", fontWeight: 600, color: "#FFFFFF", lineHeight: 0.92, margin: 0 }}>
              ALAA
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden", marginBottom: "24px" }}>
            <motion.div initial={{ y: 80 }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "clamp(52px, 14vw, 80px)", fontWeight: 600, color: "#C0A060", lineHeight: 0.92 }}>
              SHERIF
            </motion.div>
          </div>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#A0A0A0", lineHeight: 1.8, marginBottom: "32px" }}>
            Creating immersive interior experiences through design, visualization, and architectural storytelling.
          </motion.p>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            <button onClick={() => handleNav("#projects")} style={{ background: "#FFFFFF", border: "none", color: "#0A0A0A", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", padding: "14px 24px", cursor: "pointer", flex: 1, minWidth: "140px" }}>
              Explore Projects
            </button>
            <button onClick={() => handleNav("#contact")} style={{ background: "transparent", border: "1px solid rgba(192,160,96,0.5)", color: "#C0A060", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", padding: "14px 24px", cursor: "pointer", flex: 1, minWidth: "140px" }}>
              Contact Me
            </button>
          </motion.div>

          {/* Stats — all 3 in one row */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.0 }}
            style={{ display: "flex", flexWrap: "nowrap", width: "100%", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", marginTop: "32px" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  flex: "1 1 0",
                  minWidth: 0,
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  padding: "0 4px",
                }}
              >
                <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "clamp(20px, 6vw, 28px)", fontWeight: 400, color: "#FFFFFF", lineHeight: 1, marginBottom: "6px" }}>{stat.value}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(6px, 1.8vw, 8px)", color: "#555", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D scene — BELOW text on mobile */}
        <div style={{ position: "relative", height: "46vh", width: "100%", zIndex: 1, marginTop: "-16px" }}>
          {ThreeCanvas}
          {/* fade top edge into text */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to bottom, #0A0A0A, transparent)", pointerEvents: "none" }} />
          {/* fade bottom */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, #0A0A0A, transparent)", pointerEvents: "none" }} />
          {/* INTERACTIVE 3D badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
            style={{ position: "absolute", bottom: 20, right: 16, zIndex: 10, pointerEvents: "none", borderBottom: "1px solid rgba(192,160,96,0.4)", paddingBottom: "4px", display: "flex", alignItems: "center", gap: "8px" }}
          >
            <motion.div
              animate={{ x: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Hand size={12} color="rgba(192,160,96,0.7)" />
            </motion.div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "rgba(192,160,96,0.7)", letterSpacing: "0.25em" }}>DRAG TO ROTATE</span>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── DESKTOP LAYOUT ───────────────────────────────────────────────
  return (
    <section
      style={{ position: "relative", height: "100vh", minHeight: "700px", background: "#0A0A0A", overflow: "hidden", display: "flex", alignItems: "center" }}
    >
      {/* Parallax BG */}
      <motion.div style={{ position: "absolute", inset: "-5%", backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`, transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.88)" }} />

      {/* Full-bleed 3D canvas right half */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "58%", height: "100%", zIndex: 1, cursor: "grab" }}>
        {ThreeCanvas}
        <div style={{ position: "absolute", top: 0, left: 0, width: "42%", height: "100%", background: "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0.85) 50%, transparent 100%)", pointerEvents: "none", zIndex: 10 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "25%", background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 100%)", pointerEvents: "none", zIndex: 10 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "28%", background: "linear-gradient(to top, #0A0A0A 0%, transparent 100%)", pointerEvents: "none", zIndex: 10 }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "15%", height: "100%", background: "linear-gradient(to left, #0A0A0A 0%, transparent 100%)", pointerEvents: "none", zIndex: 10 }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 1 }} style={{ position: "absolute", bottom: "48px", right: "48px", display: "flex", alignItems: "center", gap: "12px", zIndex: 20, pointerEvents: "none" }}>
          <div style={{ width: "16px", height: "1px", background: "#C0A060" }} />
          <motion.div
            animate={{ x: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Hand size={14} color="#C0A060" />
          </motion.div>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "#C0A060", letterSpacing: "0.25em" }}>DRAG TO ROTATE</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 0.8 }} style={{ position: "absolute", top: "40px", right: "48px", zIndex: 20, pointerEvents: "none", borderBottom: "1px solid rgba(192,160,96,0.4)", paddingBottom: "6px" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px", color: "rgba(192,160,96,0.7)", letterSpacing: "0.3em" }}>INTERACTIVE 3D</span>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ position: "absolute", left: "48px", top: "120px", bottom: "80px", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(192,160,96,0.25), transparent)", transformOrigin: "top", zIndex: 3 }} />

      {/* Text content */}
      <div style={{ position: "relative", zIndex: 5, width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 80px" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{ width: "40px", height: "1px", background: "rgba(192,160,96,0.6)" }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#C0A060", letterSpacing: "0.35em", textTransform: "uppercase" }}>Interior Designer &amp; CG Artist</span>
        </motion.div>

        <div style={{ overflow: "hidden", marginBottom: "4px" }}>
          <motion.h1 initial={{ y: 120 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "clamp(52px, 7vw, 100px)", fontWeight: 600, color: "#FFFFFF", lineHeight: 0.95, letterSpacing: "-0.01em", margin: 0 }}>
            ALAA
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden", marginBottom: "36px" }}>
          <motion.div initial={{ y: 120 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "clamp(52px, 7vw, 100px)", fontWeight: 600, color: "#C0A060", lineHeight: 0.95, letterSpacing: "-0.01em" }}>
            SHERIF
          </motion.div>
        </div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#A0A0A0", lineHeight: 1.85, maxWidth: "380px", marginBottom: "48px" }}>
          Creating immersive interior experiences through<br />design, visualization, and architectural storytelling.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <button onClick={() => handleNav("#projects")} style={{ background: "#FFFFFF", border: "none", color: "#0A0A0A", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", padding: "15px 32px", cursor: "pointer", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#C0A060"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#0A0A0A"; }}>
            Explore Projects
          </button>
          <button onClick={() => handleNav("#contact")} style={{ background: "transparent", border: "1px solid rgba(192,160,96,0.5)", color: "#C0A060", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", padding: "15px 32px", cursor: "pointer", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(192,160,96,0.1)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
            Contact Me
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} style={{ display: "flex", gap: "48px", marginTop: "72px", paddingTop: "36px", borderTop: "1px solid rgba(255,255,255,0.1)", maxWidth: "420px" }}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "clamp(26px, 2.5vw, 34px)", fontWeight: 400, color: "#FFFFFF", lineHeight: 1, marginBottom: "8px" }}>{stat.value}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#666", letterSpacing: "0.22em" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ position: "absolute", bottom: "40px", left: "48px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", cursor: "pointer", zIndex: 5 }} onClick={() => handleNav("#about")}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "8px", color: "#555", letterSpacing: "0.3em", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>SCROLL TO DISCOVER</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, #C0A060, transparent)" }} />
      </motion.div>
    </section>
  );
}
