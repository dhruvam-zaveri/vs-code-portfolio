import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../aboutmepage.css";

export const AboutMeScreen = () => {
  return (
    <Container
      className="d-flex align-items-center page_content_alignment"
      style={{
        color: "white",
        height: "100vh",
      }}
    >
      <Row>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="d-none d-sm-block"
        >
          <Row sm="auto" xs="auto" className="px-5 d-none d-sm-block"></Row>
        </Col>
        <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
          <Row sm="auto" xs="auto" className="px-5 d-none d-md-block"></Row>
        </Col>
        <Col>
          <Col className="py-4 about_me_page_title">Something about me...</Col>
          <Row className="py-2 about_me_page_text">
            👋🏽 Hi, my name is Dhruvam.
          </Row>
          <Row className="py-2 about_me_page_text">
            🎓 Student from Charotar University of Science and Technology
            enrolled in B. Tech Computer Science and Engineering.
          </Row>
          <Row className="py-2 about_me_page_text">
            🌇 Vadodara Native, with a passion for developing solutions that
            will grow your business.
          </Row>
          <Row className="py-2 about_me_page_text">
            📚 I've developed projects related to different fields to widen my
            knowledge and abilities.
          </Row>
          <Row className="py-2 about_me_page_text">
            💻 Talking about my future, I hope to one day work as Software
            Development Engineer and work with a diverse team.
          </Row>
          <Row className="py-2 about_me_page_text">
            😄 In my free time, you can find me socializing or cracking jokes.
          </Row>
          <Row className="py-2 about_me_page_text">
            💪🏽 Adaptive, Team player, Critical thinker, Self-improving.
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMeScreen;
