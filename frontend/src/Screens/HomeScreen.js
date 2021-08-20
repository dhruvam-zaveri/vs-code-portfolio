import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// import HorizontalPadding from "../Components/HorizontalPadding.js";
import { ReactComponent as SVGImage } from "../Components/SVG/Hello.svg";
import Typewriter from "typewriter-effect";
import "../index.css";

export const HomeScreen = () => {
  return (
    <Container
      className="d-flex align-items-center homepage_content_alignment"
      style={{
        color: "white",
        height: "100vh",
        // width: "100vw",
      }}
    >
      <Row>
        <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
          {/* <Row className="px-5 d-none d-lg-block"></Row> */}
          {/* <Row sm="auto" xs="auto" className="px-5 d-none d-lg-block"></Row> */}
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
          <Row className="px-5 d-none d-lg-block"></Row>
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

// xl done
// lg done
/* <Row>
            <Col sm="auto" className="pr-4 d-block d-sm-none"></Col>
            <Col
              lg="auto"
              md="auto"
              sm="auto"
              className="px-5 d-none d-sm-block"
            ></Col>

            <Col
              lg="auto"
              md="auto"
              sm="auto"
              className="pr-5 d-none d-sm-block"
            ></Col>
            <Col
              lg="auto"
              md="auto"
              sm="auto"
              className="pr-5 d-none d-lg-block"
            ></Col>
            <Col
              lg="auto"
              md="auto"
              sm="auto"
              className="pr-0 pl-3"
              style={{ marginLeft: "70px" }}
            ></Col>
          </Row> */
