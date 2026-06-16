import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "done">("enter");
  const completedRef = useRef(false);

  useEffect(() => {
    if (completedRef.current) return;

    let fontsReady = false;
    let minTimeReady = false;
    let threeReady = false;

    function tryComplete() {
      if (fontsReady && minTimeReady && threeReady && !completedRef.current) {
        completedRef.current = true;
        setPhase("exit");
        setTimeout(() => {
          setPhase("done");
          setTimeout(onComplete, 50);
        }, 1200);
      }
    }

    // Fonts loaded
    document.fonts.ready.then(() => {
      fontsReady = true;
      tryComplete();
    });

    // Minimum display: 2.4s for the animation to feel premium
    setTimeout(() => {
      minTimeReady = true;
      tryComplete();
    }, 2400);

    // Three.js / WebGL warmup
    setTimeout(() => {
      threeReady = true;
      tryComplete();
    }, 1900);

    // Safety: never hang beyond 5s
    setTimeout(() => {
      if (!completedRef.current) {
        fontsReady = true; minTimeReady = true; threeReady = true;
        tryComplete();
      }
    }, 5000);
  }, [onComplete]);

  // Letter animation for name
  const letters = "ALAA SHERIF".split("");

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            overflow: "hidden",
            pointerEvents: phase === "exit" ? "none" : "all",
          }}
        >
          {/* ── Top half panel */}
          <motion.div
            animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "#0A0A0A",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingBottom: "48px",
              overflow: "hidden",
            }}
          >
            {/* Subtle grid */}
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(rgba(200,200,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,200,200,0.03) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }} />

            {/* Decorative corner lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ position: "absolute", top: 32, left: 40, width: 48, height: 48, borderTop: "1px solid rgba(192,160,96,0.3)", borderLeft: "1px solid rgba(192,160,96,0.3)" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ position: "absolute", top: 32, right: 40, width: 48, height: 48, borderTop: "1px solid rgba(192,160,96,0.3)", borderRight: "1px solid rgba(192,160,96,0.3)" }}
            />

            {/* Monogram SVG */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative", zIndex: 2, marginBottom: "20px" }}
            >
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                {/* Outer circle */}
                <motion.circle
                  cx="36" cy="36" r="33"
                  stroke="rgba(192,160,96,0.35)"
                  strokeWidth="0.75"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
                />
                {/* A letter */}
                <motion.path
                  d="M22 50L32 22L36 32L40 22L50 50"
                  stroke="#C0A060"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                />
                {/* Cross bar of A */}
                <motion.path
                  d="M26 40H46"
                  stroke="#C0A060"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.3, ease: "easeInOut" }}
                />
                {/* Inner circle dot */}
                <motion.circle
                  cx="36" cy="36" r="1.5"
                  fill="#C0A060"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                />
              </svg>
            </motion.div>

            {/* Name — top panel shows top half of name */}
            <div style={{ position: "relative", zIndex: 2, overflow: "hidden" }}>
              <div style={{
                display: "flex",
                gap: "2px",
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 600,
                letterSpacing: "0.35em",
                color: "#FFFFFF",
                height: "1.1em",
                overflow: "hidden",
              }}>
                {letters.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "120%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.6 + i * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Thin gold divider line in the middle */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={phase === "exit" ? { scaleX: 0 } : { scaleX: 1 }}
            transition={phase === "exit"
              ? { duration: 0.3, ease: "easeIn" }
              : { duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
            }
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(90deg, transparent 0%, rgba(192,160,96,0.6) 20%, rgba(255,255,255,0.8) 50%, rgba(192,160,96,0.6) 80%, transparent 100%)",
              transformOrigin: "center",
              zIndex: 9999,
              transform: "translateY(-50%)",
            }}
          />

          {/* ── Bottom half panel */}
          <motion.div
            animate={phase === "exit" ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "#0A0A0A",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: "48px",
              overflow: "hidden",
            }}
          >
            {/* Subtle grid */}
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(rgba(200,200,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,200,200,0.03) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }} />

            {/* Decorative corner lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ position: "absolute", bottom: 32, left: 40, width: 48, height: 48, borderBottom: "1px solid rgba(192,160,96,0.3)", borderLeft: "1px solid rgba(192,160,96,0.3)" }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ position: "absolute", bottom: 32, right: 40, width: 48, height: 48, borderBottom: "1px solid rgba(192,160,96,0.3)", borderRight: "1px solid rgba(192,160,96,0.3)" }}
            />

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              style={{
                position: "relative",
                zIndex: 2,
                fontFamily: "'Inter', sans-serif",
                fontSize: "10px",
                color: "#C0A060",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Interior Designer &amp; CG Artist
            </motion.div>

            {/* Animated "entering" dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  style={{
                    width: "1px",
                    height: "12px",
                    background: "rgba(192,160,96,0.6)",
                    borderRadius: "1px",
                  }}
                />
              ))}
            </motion.div>

            {/* Portfolio year bottom right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              style={{
                position: "absolute",
                bottom: 40,
                right: 48,
                fontFamily: "'Inter', sans-serif",
                fontSize: "8px",
                color: "#333",
                letterSpacing: "0.3em",
                zIndex: 2,
              }}
            >
              © 2024
            </motion.div>

            {/* Location tag bottom left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              style={{
                position: "absolute",
                bottom: 40,
                left: 48,
                fontFamily: "'Inter', sans-serif",
                fontSize: "8px",
                color: "#333",
                letterSpacing: "0.3em",
                zIndex: 2,
              }}
            >
              CAIRO · UAE · KSA
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
