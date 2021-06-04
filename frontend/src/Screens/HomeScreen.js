import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HorizontalPadding from "../Components/HorizontalPadding.js";
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
          <Row>
            <Col
              className="d-flex align-items-center"
              xl={5}
              lg={5}
              md={12}
              sm={12}
            >
              <SVGImage height="40vh" width="30vw" />
            </Col>
            <Col xl={1} lg={1} className="d-none d-md-block"></Col>
            <Col
              className="d-flex align-items-center"
              xl={6}
              lg={6}
              md={12}
              sm={12}
            >
              <Container className="d-block">
                <Row style={{ fontWeight: 700, fontSize: 36 }}>
                  Hello there! 👋
                </Row>
                <Row style={{ fontWeight: 500, fontSize: 28 }}>
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

// xl done
// lg done
