import { useEffect, useRef, useState } from "react";
import "../styles/cyberBackground.css";

const matrixTokens = [

  "{}",
  "}",
  "[",
  "]",
  "(",
  ")",
  "<>",
  "</>",
  "=>",
  "===",
  "&&",
  "||",

];

const cyberTexts = [
  "REACT",
  "VITE",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "NODE_JS",
  "EXPRESS",
  "NEXT_JS",
  "TAILWIND_CSS",
  "HTML5",
  "CSS3",
  "REST_API",
  "GRAPHQL",
  "MONGODB",
  "POSTGRESQL",
  "MYSQL",
  "GIT",
  "GITHUB",
  "DOCKER",
  "LINUX",
  "FIREBASE",
  "SUPABASE",
  "VERCEL",
  "NETLIFY",
  "FIGMA",
];

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const CyberBackground = () => {
  const [matrixColumns, setMatrixColumns] = useState([]);
  const [particles, setParticles] = useState([]);
  const [streams, setStreams] = useState([]);
  const [signals, setSignals] = useState([]);
  const orbLayerRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const signalTimerRef = useRef(null);

  useEffect(() => {
    const buildMatrix = () => {
      const columns = Math.max(12, Math.floor(window.innerWidth / 20));

      setMatrixColumns(
        Array.from({ length: columns }, (_, index) => {
          const charCount = Math.floor(randomBetween(10, 30));
          const text = Array.from({ length: charCount }, () => {
            const tokenIndex = Math.floor(Math.random() * matrixTokens.length);
            return matrixTokens[tokenIndex];
          }).join(" ");

          return {
            id: `matrix-${index}-${Date.now()}`,
            left: index * 20,
            duration: randomBetween(10, 15),
            delay: randomBetween(0, 5),
            text,
          };
        })
      );
    };

    const buildParticles = () => {
      setParticles(
        Array.from({ length: 50 }, (_, index) => ({
          id: `particle-${index}`,
          left: randomBetween(0, 100),
          delay: randomBetween(0, 20),
          duration: randomBetween(20, 30),
        }))
      );
    };

    const buildStreams = () => {
      setStreams(
        Array.from({ length: 10 }, (_, index) => ({
          id: `stream-${index}`,
          top: randomBetween(0, 100),
          delay: randomBetween(0, 5),
          angle: randomBetween(-15, 15),
        }))
      );
    };

    buildMatrix();
    buildParticles();
    buildStreams();

    let resizeTimer;
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(buildMatrix, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const launchSignal = () => {
      const id = crypto.randomUUID();
      const text = cyberTexts[Math.floor(Math.random() * cyberTexts.length)];

      setSignals((current) => [
        ...current.slice(-4),
        {
          id,
          text,
          top: randomBetween(6, 88),
          left: randomBetween(4, 88),
        },
      ]);

      window.setTimeout(() => {
        setSignals((current) => current.filter((signal) => signal.id !== id));
      }, 3000);
    };

    signalTimerRef.current = window.setInterval(launchSignal, 5000);

    return () => {
      window.clearInterval(signalTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    let animationFrame = 0;
    const target = { x: 0, y: 0 };

    const handleMouseMove = (event) => {
      target.x = event.clientX - window.innerWidth / 2;
      target.y = event.clientY - window.innerHeight / 2;

      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        const orbs = orbLayerRef.current?.querySelectorAll(".cyber-orb");
        orbs?.forEach((orb, index) => {
          const speed = (index + 1) * 0.018;
          orb.style.setProperty("--mouse-x", `${target.x * speed}px`);
          orb.style.setProperty("--mouse-y", `${target.y * speed}px`);
        });

        if (cursorGlowRef.current && window.innerWidth > 768) {
          cursorGlowRef.current.style.setProperty("--cursor-x", `${event.clientX}px`);
          cursorGlowRef.current.style.setProperty("--cursor-y", `${event.clientY}px`);
          cursorGlowRef.current.style.opacity = "1";
        }

        animationFrame = 0;
      });
    };

    const handleMouseLeave = () => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="cyber-background" aria-hidden="true">
      <div className="cyber-gradient" />

      <div className="matrix-rain">
        {matrixColumns.map((column) => (
          <span
            className="matrix-column"
            key={column.id}
            style={{
              left: `${column.left}px`,
              animationDuration: `${column.duration}s`,
              animationDelay: `${column.delay}s`,
            }}
          >
            {column.text}
          </span>
        ))}
      </div>

      <div className="particles">
        {particles.map((particle) => (
          <span
            className="particle"
            key={particle.id}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="data-streams">
        {streams.map((stream) => (
          <span
            className="data-stream"
            key={stream.id}
            style={{
              top: `${stream.top}%`,
              animationDelay: `${stream.delay}s`,
              transform: `rotate(${stream.angle}deg)`,
            }}
          />
        ))}
      </div>

      <div className="orb-layer" ref={orbLayerRef}>
        <span className="cyber-orb cyber-orb-1" />
        <span className="cyber-orb cyber-orb-2" />
        <span className="cyber-orb cyber-orb-3" />
      </div>

      <div className="grid-overlay">
        <div className="grid-lines" />
        <div className="grid-glow" />
      </div>

      <div className="scanlines" />
      <div className="noise-overlay" />
      <div className="cursor-glow" ref={cursorGlowRef} />

      {signals.map((signal) => (
        <span
          className="cyber-signal"
          key={signal.id}
          style={{
            top: `${signal.top}vh`,
            left: `${signal.left}vw`,
          }}
        >
          {signal.text}
        </span>
      ))}
    </div>
  );
};

export default CyberBackground;
