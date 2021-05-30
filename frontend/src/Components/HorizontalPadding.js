import React from "react";
import { Col, Row } from "react-bootstrap";

const HorizontalPadding = () => {
  return (
    <Row>
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
        className="pr-5 d-none d-md-block"
      ></Col>
      <Col
        lg="auto"
        md="auto"
        sm="auto"
        className="pr-0 pl-3"
        style={{ marginLeft: "77px" }}
      ></Col>
    </Row>
  );
};

export default HorizontalPadding;
