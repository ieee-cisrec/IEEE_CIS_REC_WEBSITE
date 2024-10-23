import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      {/* <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Welcome <span className="purple"> IEEE </span> Computation
            </h1>
            <p className="home-about-body">
              Lets connect Lets connect Lets connect
              <br />
              <br /> Lets connect Lets connect Lets connect
              <i>
                <b className="purple"> Lets connect </b>
              </i>
              <br />
              <br />
              Lets connect Lets connect Lets connect Lets connect &nbsp;
              <i>
                <b className="purple">
                  {" "}
                  Lets connect Lets connect Lets connect
                </b>{" "}
                Lets connect Lets connect Lets connect{" "}
                <b className="purple"> Lets connect Lets connect</b>
              </i>
              <br />
              <br />
              Lets connect Lets connect Lets connect Lets connect Lets connect
              Lets connect
              <b className="purple"> Lets connect</b> Lets connect
              <i>
                <b className="purple"> Lets connect Lets connect</b>
              </i>
              &nbsp; Lets connect
              <i>
                <b className="purple"> Lets connect Lets connect</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND us ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container> */}
      Will be added soon
    </Container>
  );
}
export default Home2;
