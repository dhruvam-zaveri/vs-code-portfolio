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
        <Col>
          <Col className="py-4 about_me_page_title">Few things about me...</Col>
          <Row className="py-2 about_me_page_text">
            👋🏽 Hi, my name is Dhruvam.
          </Row>
          <Row className="py-2 about_me_page_text">
            🎓 A graduate student of computer science at the University of Southern California.
          </Row>
          <Row className="py-2 about_me_page_text">
            📚 As a dynamic professional, I've consistently refined my managing abilities while broadening my technological knowledge. I've orchestrated optimal as well as deployable solutions for applications such as multi-cloud cluster management, automated machine learning, and diverse commercial mobile apps generating efficiency improvements while leading and mentoring teams. Collaborating cross-functionally, I led container installation and updates, subscriber provisioning, and the development of a Python library for company-managed AWS cluster administration, demonstrating effective collaboration. My strategic problem-solving is reflected in the streamlining of architectures and the acceleration of processes.
          </Row>
          <Row className="py-2 about_me_page_text">
            💻 Talking about the future, I aspire to lead as a technical or product manager, working alongside skilled teams to develop high-revenue products that cater to business and client needs. Through strategic leadership, I aim to drive innovation and ensure organizational success.
          </Row>
          <Row className="py-2 about_me_page_text">
            😄 In my time away from the screen, you can find me lost in melodies
            or cracking lame jokes.
          </Row>
          <Row className="py-2 about_me_page_text">
          💪🏽 I specialize in project management, python based development, kubernetes, and cloud platforms like AWS and Microsoft Azure.
          </Row>
          <Row className="py-2 about_me_page_text">
            👾 An avid emoji user, it is obvious from the usage here.
          </Row>
          <Row className="p-3"></Row>
        </Col>
      </Row>
      
    </Container>
  );
};

export default AboutMeScreen;
