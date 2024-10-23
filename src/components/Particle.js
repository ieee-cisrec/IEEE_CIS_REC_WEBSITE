import React, { useCallback } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const particlesInit = useCallback((engine) => {
    console.log("Particles instance initialized", engine);
    // Additional customizations can go here if needed
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      params={{
        particles: {
          number: {
            value: 100, // Adjust snowflake count
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // White snowflakes
          },
          shape: {
            type: "circle", // Circle-shaped snowflakes
          },
          opacity: {
            value: 0.8,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true, // Enable snowfall movement
            direction: "bottom", // Move downward
            speed: 2, // Snowfall speed
            straight: false, // Allow horizontal drift
            random: true,
            out_mode: "out", // Disappear at the canvas edge
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Push particles away on hover
            },
            onclick: {
              enable: true,
              mode: "push", // Add more snowflakes on click
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true, // For better visuals on high-DPI screens
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
}

export default Particle;
