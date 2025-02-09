import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Accordion from "react-bootstrap/Accordion";
import "./Project.css";
import event1 from "./Assets/event1.jpeg";
import event2 from "./Assets/event2.png";
import event3 from "./Assets/event3.jpg";
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
              title="Cloud Computing Workshop"
              description="IEEE CIS REC's Cloud Computing Workshop: Workshop on Feb 12, 2025 (3-5 PM) for a hands-on Cloud Computing Workshop!
                  Learn the basics of Cloud Computing, Real world application with AWS, Interactive quiz and Discover how it can supercharge your career!.
                  Register now (limited spots) and receive an e-certificate. Venue: Purple Hall"
              swalTitle="Workshop Details"
              swalText="This event offers basics of Cloud Computing, Real world application with AWS and Interactive quiz. Limited spots available!"
              status="yes"
              reglink = "https://docs.google.com/forms/d/e/1FAIpQLScnxZ92G7fzX7Z40p1Set8dOGaTUpQKIf8cRg9dt49v4wy2GA/viewform"
              open = "true"
            />
          </Col>
         </Row>
    <br></br>
            
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
              description="IEEE CIS REC's EnVision Chapter 0: CV Workshop on Oct 23, 2024 (3-5 PM) for a hands-on computer vision project!
                  Learn Roboflow, YOLO, dataset management, pre-processing, and augmentation.
                  Register now (limited spots) and receive an e-certificate."
              swalTitle="Envision Event Details"
              swalText="This event offers hands-on experience with computer vision. Learn Roboflow, YOLO, and data augmentation. Limited spots available!"
              status="yes"
            />
          </Col>

          <Col
            md={4}
            className="project-card fade-in"
            ref={(el) => (fadeInElements.current[1] = el)}
          >
            <ProjectCard
              imgPath={event3}
              isBlog={false}
              title="Hack Hive"
              description="IEEE CIS’s Hack Hive mini hackathon, 
              held on September 3rd during the IEEE Breadths Symposium! 
              This event gathered innovators and developers to tackle real-world challenges in artificial intelligence.
              Participants showcased their technical skills while fostering a spirit of learning and problem-solving."
              swalTitle="Hack Hive Event Details"
              swalText="The Hack Hive mini hackathon, part of the IEEE Breadths Symposium, gathered AI enthusiasts
               to solve real-world challenges and innovate together. 
              It offered participants a platform to collaborate, create AI solutions, and demonstrate technical expertise."
            />
          </Col>

          <Col
            md={4}
            className="project-card fade-in"
            ref={(el) => (fadeInElements.current[2] = el)}
          >
            <ProjectCard
              imgPath={event2}
              isBlog={false}
              title="IEEE CIS SYSTEM 101"
              description="IEEE CIS Rajalakshmi Engineering College's awareness program with 
              Dr. Revatthy Krishnamurthy, designed to guide participants on publishing IEEE papers across various domains. 
              Gain valuable insights into the publication process and enhance your understanding of IEEE standards."
              swalTitle="IEEE CIS SYSTEM 101 Event Details"
              swalText="IEEE CIS chapter at Rajalakshmi Engineering College 
              is hosting an Awareness Program led by Dr. Revatthy Krishnamurthy. 
              This insightful session will guide participants through the process
               of publishing IEEE papers in various domains, 
              offering valuable knowledge on IEEE standards and best practices for successful publication."
            />
          </Col>
          <div
            className="fade-in-element q_a fade-in"
            ref={(el) => (fadeInElements.current[3] = el)}
          >
            <h1 className="project-heading">
              F <strong className="purple">A </strong>Q
            </h1>
            <Accordion defaultActiveKey="4" className="bg-transparent">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is the Outcome of Envision?
                </Accordion.Header>
                <Accordion.Body>
                  You will have hands on experience and basic knowledge about
                  Computer Vision.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="4" className="bg-transparent">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  When will Innov8 in 100 be expected?
                </Accordion.Header>
                <Accordion.Body>
                  The signature event of IEEE CIS "Innov8 in 100" is expected to
                  be announced on January 2025.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
