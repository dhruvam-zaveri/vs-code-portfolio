import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Tab = ({ title, logo }) => {
  return (
    <Container
      className="py-2"
      style={{
        background: "#212121",
        color: "#949494",
        fontWeight: "400",
        margin: 0,
      }}
    >
      <Row lg="auto">
        <Col lg="auto" style={{ color: "yellow" }}>
          {logo}
        </Col>
        <Col lg="auto">{title}</Col>
      </Row>
    </Container>
  );
};

export default Tab;
