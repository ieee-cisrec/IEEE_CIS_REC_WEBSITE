import React, { useEffect, useRef } from "react";
import { Container, Col } from "react-bootstrap";
import Particle from "../Particle";
import Founder from "./Founder";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import "./about.css"; // Assuming fade-in styles are here

function About() {
  const fadeInElements = useRef([]); // Store references to elements for animation

  // Intersection Observer effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    fadeInElements.current.forEach((el) => observer.observe(el));

    return () =>
      fadeInElements.current.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* AboutCard Section */}
        <div
          className="about-card fade-in"
          ref={(el) => (fadeInElements.current[0] = el)}
        >
          <Aboutcard />
        </div>

        {/* Techstack Section */}
        <div
          className="techstack-card fade-in"
          ref={(el) => (fadeInElements.current[1] = el)}
        >
          <Techstack />
        </div>

        {/* Founder Section (No Column for Layout Preservation) */}
        <Founder />
      </Container>
    </Container>
  );
}

export default About;
