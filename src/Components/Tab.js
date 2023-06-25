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
      <Row lg="auto" md="auto" sm="auto" xs="auto">
        <Col
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          style={{ color: "yellow" }}
          className="d-flex justify-content-center pr-1"
        >
          {logo}
        </Col>
        <Col
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="d-flex justify-content-center pr-4 pl-1"
          style={{ fontSize: 12 }}
        >
          {title}
        </Col>
      </Row>
    </Container>
  );
};

export default Tab;
