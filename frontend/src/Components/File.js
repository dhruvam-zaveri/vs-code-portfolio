import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../index.css";

export const File = ({ title, logo }) => {
  return (
    <Container
      className="py-2 ml-3"
      style={{
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
          className="d-flex justify-content-center pr-1"
        >
          {logo}
        </Col>
        <Col
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="d-flex justify-content-center pr-4 pl-1 filebar_link"
        >
          {title}
        </Col>
      </Row>
    </Container>
  );
};

export default File;
