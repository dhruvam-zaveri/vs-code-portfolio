import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export const Header = () => {
  return (
    <div>
      <Container
        style={{ background: "#3C3C3C", color: "#B2B2B2", fontSize: "12px" }}
        fluid
      >
        <Row md={5}>
          <Col md={6}>
            <Row>
              <Col md={1}>
                <Image
                  height={20}
                  width={20}
                  className="align-self-center"
                  src="./assets/vs_code_logo.png"
                  fluid
                />
              </Col>
              <Col md={1}>File</Col>
              <Col md={1}>Edit</Col>
              <Col md={1.5}>Selection</Col>
              <Col md={1}>View</Col>
              <Col md={1}>Go</Col>
              <Col md={1}>Run</Col>
              <Col md={1.5}>Terminal</Col>
              <Col md={1}>Help</Col>
            </Row>
          </Col>

          <Col className="align-self-center py-1">
            Dhruvam Zaveri - Developer
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
