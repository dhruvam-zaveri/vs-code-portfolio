import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as SVGImage } from "../Components/SVG/Hello.svg";
import Typewriter from "typewriter-effect";
import "./css/homepage.css";
import "../index.css";

export const HomeScreen = () => {
  return (
    <Container className="d-flex align-items-center homepage_content_alignment main_content_height">
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
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="	d-none d-sm-block d-md-none"
        >
          <Row sm="auto" xs="auto" className="px-1 d-none d-md-block"></Row>
        </Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="d-none d-sm-block"
        >
          <Row sm="auto" xs="auto" className="px-5 d-none d-md-block"></Row>
        </Col>
        <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
          <Row sm="auto" xs="auto" className="px-5 d-none d-md-block"></Row>
        </Col>
        <Col>
          <Row>
            <Col className="d-flex align-items-center" xl={5} lg={5}>
              <SVGImage className="homepage_svg" />
            </Col>
            <Col xl={1} lg={1} className="d-none d-md-block"></Col>
            <Col className="d-flex align-items-center" xl={6} lg={6}>
              <Container className="d-block">
                <Row className="homepage_main_title">Hello there! 👋</Row>
                <Row className="homepage_name_text">I'm Dhruvam Zaveri</Row>
                <Row>
                  <Col
                    xl="auto"
                    lg="auto"
                    md="auto"
                    sm="auto"
                    xs="auto"
                    className="p-0 m-0 homepage_typewriter_text"
                  >
                    A/An{" "}
                  </Col>
                  <Col
                    xl="auto"
                    lg="auto"
                    md="auto"
                    sm="auto"
                    xs="auto"
                    className="pl-1 homepage_typewriter_text"
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Designer.",
                          "Developer.",
                          "Innovator.",
                          "Learner.",
                        ],
                        autoStart: true,
                        loop: true,
                        cursor: "_",
                      }}
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
