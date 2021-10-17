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
          className="px-4 d-none d-sm-block"
        ></Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="px-5 d-none d-md-block"
        ></Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="px-3 d-none d-xl-block"
        ></Col>
        {/* <Col
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
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="d-none d-sm-block"
        >
          <Row sm="auto" xs="auto" className="px-5 d-none d-lg-block"></Row>
        </Col> */}
        <Col>
          <Col className="py-4 about_me_page_title">Few things about me...</Col>
          <Row className="py-2 about_me_page_text">
            👋🏽 Hi, my name is Dhruvam.
          </Row>
          <Row className="py-2 about_me_page_text">
            🎓 Student from Charotar University of Science and Technology
            enrolled in B. Tech Computer Science and Engineering.
          </Row>
          <Row className="py-2 about_me_page_text">
            🌇 Vadodara Native, with a passion for developing innovative and
            creative projects.
          </Row>
          <Row className="py-2 about_me_page_text">
            📚 I've developed several projects using various technologies to
            widen my knowledge and abilities.
          </Row>
          <Row className="py-2 about_me_page_text">
            💻 Talking about my future, I hope to one day work as a Software
            Development Engineer and work with a diverse team.
          </Row>
          <Row className="py-2 about_me_page_text">
            😄 In my time away from the screen, you can find me lost in melodies
            or cracking jokes.
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
