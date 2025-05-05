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
import event4 from "./Assets/cloudspace.jpg";
import event5 from "./Assets/operation_shadow.png";
import event6 from "./Assets/rewired.png";
import event7 from "./Assets/datavizzx.jpg";
import event8 from "./Assets/llm_tuned.png";

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
              imgPath={event8}
              isBlog={false}
              title="LLM TUNED"
              description="Ready to explore the fascinating world of Artificial Intelligence? Join us for ZERO GPT, 
                an interactive online workshop where you'll learn to build a GPT-style language model from the ground 
                up—no prior experience with large language models required! This hands-on session will guide you through
                the foundations of Natural Language Processing (NLP), covering key concepts like tokenization, stemming, 
                lemmatization, and the evolution from classical NLP to transformer models. You will dive into web scraping with Wikipedia,
                construct a GPT-2 style model, and follow a complete text generation pipeline with live coding."
              swalTitle="Workshop Details"
              swalText="<b>Event: </b>LLM TUNED <br> <b>Date </b> May 5 & 6, 2025 <br> <b> Time: </b>7:45 PM – 9:00 PM <br><b>Platform: </b>Google Meet"
              status="yes"
              close = "true"
              reglink = "https://docs.google.com/forms/d/e/1FAIpQLSfIAW9UgUxRDD0LWYF1QUr4VkWruQGVTP7E0EJAsUyK6cfyXw/viewform?usp=header"
            />
          </Col>
                
        </Row>
    
          
    <br></br>
    <br></br>

        <h1 className="project-heading">
          Milestone <strong className="purple">Events</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                
        <Col
            md={4}
            className="project-card fade-in"
            ref={(el) => (fadeInElements.current[1] = el)}
          >
            <ProjectCard
              imgPath={event7}
              isBlog={false}
              title="DATAVIZZX"
              description="Ready to unlock the power of data? Join us for DataVizzX,
                an insightful online Power BI Workshop designed to give you a strong foundation in data analytics and visualization. Go deeper with DAX,
                access R-powered insights via video guides, build stunning dashboards, and learn the logic behind the visuals. Date: April 21, 2025
                Register now and take the first step towards becoming a Power BI expert! "
              swalTitle="Workshop Details"
              swalText="<b>Event: </b>DataVizzX <br> <b>Date </b> April 21, 2025 <br> <b> Time: </b>10:30 AM – 12:00 PM <br>"
              status="yes"
            />
          </Col>

           <Col
            md={4}
            className="project-card fade-in"
            ref={(el) => (fadeInElements.current[2] = el)}
          >
            <ProjectCard
              imgPath={event6}
              isBlog={false}
              title="REWIRED"
              description="Ready to jump into the exciting world of IoT? Join us on an exciting  online session where we’ll 
                  unravel the fundamentals and guide you through intriguing IOT concepts in 2-day Skill Training. Explore real-world applications, 
                  Understand the integral fundamentals and Discover career opportunities in the growing IoT field.
                  A crucial  screening session where you'll learn the basics  from experts.
                  (Stand a chance to be shortlisted from the online session, for an exciting offline event where you get to build an interesting real world project)   
                  Register now(limited spots)"
              swalTitle="Workshop Details"
              swalText="<b>Event: </b>REWIRED<br> <b>Phase 1 (Online): </b> March 03, 2025 <br> <b>Phase 2 (Offline): </b> March 06, 2025<br>"
              status="yes"
            />
          </Col>
                
          <Col
            md={4}
            className="project-card fade-in"
            ref={(el) => (fadeInElements.current[3] = el)}
          >
            <ProjectCard
              imgPath={event5}
              isBlog={false}
              title="OPERATION SHADOW"
              description="Get ready for Operation Shadow: Unmasking Cyber Threats!
                  Join us for an exclusive cybersecurity workshop where we’ll expose real-world cyber threats and arm you with the knowledge to stay protected 
                  and explore a simulated cyber attack demonstration, deep dive into C2 servers and trojans, Learn essential defense strategies!
                  Register now (limited spots) and receive an e-certificate. Venue: Purple Hall"
              swalTitle="Workshop Details"
              swalText="<b>Event: </b>Operation Shadow<br> <b>Date: </b> Feb 15, 2025 <br> <b>Venue: </b>Purple Hall <br>"
              status="yes"
            />
          </Col>

                
          <Col
            md={4}
            className="project-card fade-in"
            ref={(el) => (fadeInElements.current[4] = el)}
          >
            <ProjectCard
              imgPath={event4}
              isBlog={false}
              title="CLOUDSCAPE"
              description="IEEE CIS REC's CloudScape: Workshop on Feb 12, 2025 (3-5 PM) for a hands-on Cloud Computing Workshop!
                  Learn the basics of Cloud Computing, Real world application with AWS, Interactive quiz and Discover how it can supercharge your career!."
              swalTitle="Workshop Details"
              swalText="Cloud Space offers a Fundamentals of Cloud Computing, Real world application with AWS and Interactive quiz!"
              status="yes"
            />
          </Col>

          <Col
            md={4}
            className="project-card fade-in"
            ref={(el) => (fadeInElements.current[5] = el)}
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
            ref={(el) => (fadeInElements.current[6] = el)}
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
            ref={(el) => (fadeInElements.current[7] = el)}
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
            ref={(el) => (fadeInElements.current[8] = el)}
          >
            <h1 className="project-heading">
              F <strong className="purple">A </strong>Q
            </h1>
            <Accordion defaultActiveKey="4" className="bg-transparent">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is IEEE Computational Intelligence Society?
                </Accordion.Header>
                <Accordion.Body>
                  The IEEE Computational Intelligence Society (CIS) is a dynamic community of students passionate about artificial intelligence, machine learning, and intelligent systems.
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
