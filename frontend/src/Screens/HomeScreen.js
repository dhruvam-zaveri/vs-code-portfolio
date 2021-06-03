import React from "react";
import Typewriter from "typewriter-effect";
import { Row, Col, Container } from "react-bootstrap";
import HorizontalPadding from "../Components/HorizontalPadding.js";
// import { ReactComponent as SVGImage } from "../Components/SVG/Coding.svg";
import { ReactComponent as SVGImage } from "../Components/SVG/Hello.svg";

export const HomeScreen = () => {
  return (
    <Container
      className="d-flex align-items-center"
      style={{ color: "white", paddingTop: "80px", height: "100vh" }}
    >
      <Row>
        <Col lg="auto" md="auto" sm="auto" xs="auto">
          <HorizontalPadding />
        </Col>

        <Col>
          {/* <Container
          className="d-flex justify-content-center"
          style={{ fontSize: 36, fontWeight: 500 }} 
        >
          Home
        </Contai</Container>ner> */}
          <Row>
            <Col
              className="d-flex align-items-center"
              xxl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <SVGImage height="40vh" width="30vw" />
            </Col>
            <Col
              className="d-flex align-items-center"
              xxl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <Container className="d-block">
                <Row style={{ fontWeight: 700, fontSize: 40 }}>
                  Hello there! 👋
                </Row>
                <Row style={{ fontWeight: 500, fontSize: 32 }}>
                  I'm Dhruvam Zaveri
                </Row>
                <Row style={{ fontWeight: 300, fontSize: 18 }}>
                  Welcome! to my portfolio website
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
