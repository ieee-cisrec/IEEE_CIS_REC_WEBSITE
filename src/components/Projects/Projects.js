import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import event1 from "./Assets/event1.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Accordion from "react-bootstrap/Accordion";
import "./Project.css";
function Projects() {
  const fadeInElements = useRef([]);

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
      { threshold: 0.1 } // Adjust as needed
    );

    fadeInElements.current.forEach((el) => observer.observe(el));

    return () => fadeInElements.current.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Welcome to Our <strong className="purple">Events Hub! </strong>
        </h1>
        <p style={{ color: "white" }}>
          At IEEE CIS, we believe that connection and collaboration are key to
          achieving great things. Our events provide opportunities for members
          to network, learn, and engage with one another while enjoying
          meaningful experiences. Whether you're looking to expand your
          knowledge, participate in exciting activities, or simply meet new
          people, our events have something for everyone. Explore our current
          and upcoming events below to get involved!
        </p>
        <br></br>
        <br></br>
        <h1 className="project-heading">
          Upcoming <strong className="purple">Events</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card fade-in"
            ref={(el) => (fadeInElements.current[0] = el)}
          >
            <ProjectCard
              imgPath={event1}
              isBlog={false}
              title="Envision"
              description="Join IEEE CIS REC's EnVision Chapter 0: CV Workshop on Oct 23, 2024 (3-5 PM) for a hands-on computer vision project!
                  Learn Roboflow, YOLO, dataset management, pre-processing, and augmentation.
                  Register now (limited spots) and receive an e-certificate."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          // <div
          //   className="fade-in-element q_a fade-in"
          //   ref={(el) => (fadeInElements.current[1] = el)}
          // >
          //   <h1 className="project-heading">
          //     F <strong className="purple">A </strong>Q
          //   </h1>
          //   <Accordion defaultActiveKey="4" className="bg-transparent">
          //     <Accordion.Item eventKey="0">
          //       <Accordion.Header>Accordion Item #1</Accordion.Header>
          //       <Accordion.Body>
          //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          //         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          //         Ut enim ad minim veniam, quis nostrud exercitation ullamco
          //         laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          //         irure dolor in reprehenderit in voluptate velit esse cillum
          //         dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          //         cupidatat non proident, sunt in culpa qui officia deserunt
          //         mollit anim id est laborum.
          //       </Accordion.Body>
          //     </Accordion.Item>
          //     <Accordion.Item eventKey="1">
          //       <Accordion.Header>Accordion Item #2</Accordion.Header>
          //       <Accordion.Body>
          //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          //         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          //         Ut enim ad minim veniam, quis nostrud exercitation ullamco
          //         laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          //         irure dolor in reprehenderit in voluptate velit esse cillum
          //         dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          //         cupidatat non proident, sunt in culpa qui officia deserunt
          //         mollit anim id est laborum.
          //       </Accordion.Body>
          //     </Accordion.Item>
          //     <Accordion.Item eventKey="2">
          //       <Accordion.Header>Accordion Item #2</Accordion.Header>
          //       <Accordion.Body>
          //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          //         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          //         Ut enim ad minim veniam, quis nostrud exercitation ullamco
          //         laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          //         irure dolor in reprehenderit in voluptate velit esse cillum
          //         dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          //         cupidatat non proident, sunt in culpa qui officia deserunt
          //         mollit anim id est laborum.
          //       </Accordion.Body>
          //     </Accordion.Item>
          //   </Accordion>
          // </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
