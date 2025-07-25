import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Lightweight particles

const ParticlesBackground = () => {
  // Initialize particles engine
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        // background: { color: "#0d0d0d" }, // Dark background
        fpsLimit: 120, // Smooth animations
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" }, // Particles push on click
            onHover: { enable: true, mode: "repulse" }, // Particles repel on hover
          },
        },
        particles: {
          color: { value: "#ffffff" }, // White particles
          links: {
            color: "#ffffff",
            distance: 150, // Link distance between particles
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
          },
          number: {
            density: { enable: true, area: 800 }, // Controls particle density
            value: 80, // Number of particles
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" }, // Particle shape
          size: { value: { min: 1, max: 3 } }, // Random sizes
        },
        detectRetina: true, // Optimizes for high-DPI screens
      }}
    />
  );
};

export default ParticlesBackground;
