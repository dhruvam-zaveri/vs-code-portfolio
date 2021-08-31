import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container
      style={{
        background: "#2977d1",
        color: "#fff",
        fontSize: "12px",
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
      }}
      fluid
    >
      <Row
        lg="auto"
        md="auto"
        sm="auto"
        className="py-1 pl-3 d-flex justify-content-end"
      >
        <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto" className="p-0">
          All Rights Reserved © Copyright
        </Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          style={{
            fontWeight: "bold",
            paddingLeft: "3px",
            paddingRight: "9px",
          }}
        >
          Dhruvam Zaveri
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

/*
  for displaying content based on breakpoint: https://mdbootstrap.com/docs/react/utilities/display/
*/
/*
  xl - infinity to 1200 (done)
  lg - 1199 to 992 (done)
  md - 991 to 768 (done)
  sm - 767 to 576 (done)
  xs - 575 to least 
*/
