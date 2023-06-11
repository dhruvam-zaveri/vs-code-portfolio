import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./css/aboutmepage.css";
import "../index.css";

export const AboutMeScreen = () => {
  return (
    <Container className="d-flex align-items-center page_content_alignment main_content_height">
      <Row>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="px-4"
        ></Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="px-5 d-none d-sm-block"
        ></Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="px-5 d-none d-sm-block"
        ></Col>
        <Col className="content_col">
          <Col className="py-4 about_me_page_title">Few things about me...</Col>
          <Row className="py-2 about_me_page_text">
            👋🏽 Hi, my name is Dhruvam.
          </Row>
          <Row className="py-2 about_me_page_text">
            🎓 A computer science graduate student at University of Southern
            California.
          </Row>
          <Row className="py-2 about_me_page_text">
            🌇 Vadodara Native, with a passion for developing innovative and
            creative projects.
          </Row>
          <Row className="py-2 about_me_page_text">
            📚 Developed myraid projects using multifarious technologies to
            widen my knowledge as well as abilities.
          </Row>
          <Row className="py-2 about_me_page_text">
            💻 Talking about my future, I dream to work as a Software Engineer
            leading a team which can generate maximum profit for your
            organization.
          </Row>
          <Row className="py-2 about_me_page_text">
            😄 In my time away from the screen, you can find me lost in melodies
            or cracking lame jokes.
          </Row>
          <Row className="py-2 about_me_page_text">
            👾 An avid emoji user, it is obvious from the usage here.
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMeScreen;
