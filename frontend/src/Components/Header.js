import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export const Header = () => {
  return (
    <Container
      style={{ background: "#3C3C3C", color: "#B2B2B2", fontSize: "12px" }}
      fluid
    >
      <Row lg={5} md={5} sm={5} xs={4}>
        <Col lg={5} md={5} sm={5} xs={4}>
          <Row className="py-1">
            <Col lg={1} md={1} sm={1} xs={1}>
              <Image height={16} width={16} src="./assets/vs_code_logo.png" />
            </Col>
            <Col lg={1} md={1} sm={1} xs={1}>
              File
            </Col>
            <Col lg={1} md={1} sm={1} className="d-none d-sm-block">
              {" "}
              {/* will not be visible for widths less then sm*/}
              Edit
            </Col>
            <Col lg={1} md={1} className="d-none d-md-block">
              {" "}
              {/* will not be visible for widths less then md*/}
              View
            </Col>
            <Col lg={1} md={1} className="d-none d-md-block">
              {" "}
              {/* will not be visible for widths less then md*/}
              Go
            </Col>
            <Col lg={1} className="d-none d-lg-block">
              {" "}
              {/* will not be visible for widths less then lg*/}
              Run
            </Col>
            <Col lg={1} className="d-none d-lg-block">
              {" "}
              {/* will not be visible for widths less then lg*/}
              Help
            </Col>
            <Col
              md={1}
              sm={1}
              className="d-none d-xs-block d-sm-block d-md-block d-lg-none"
            >
              {" "}
              {/* will be visible for widths except lg and xs*/}
              ...
            </Col>
            <Col xs={1} className="d-block d-sm-none">
              {" "}
              {/* will be visible for widths xs only*/}
              ...
            </Col>
          </Row>
        </Col>
        <Col className="py-1">Dhruvam Zaveri - Developer</Col>{" "}
        {/* will be centred always*/}
      </Row>
    </Container>
  );
};

export default Header;

/*
  for displaying content based on breakpoint: https://mdbootstrap.com/docs/react/utilities/display/
*/
/*
  xl - infinity to 1200 (done)
  lg - 1199 to 992 (done)
  md - 991 to 768 (done)
  sm - 768 to 576 (done)
  xs - 575 to least 
*/
