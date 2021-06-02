import React from "react";
import { Navbar, Row, Col, Container, Nav } from "react-bootstrap";
import File from "./File.js";
import { JsLogo, PyLogo } from "./Logos.js";

export const FilesBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className="d-flex flex-column"
      style={{
        padding: 0,
        height: "100vh",
        background: "#2A2A2C",
        position: "fixed",
        top: "26px",
        left: "60px",
      }}
    >
      <Container style={{ padding: 0 }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse expand="sm" id="basic-navbar-nav">
          <Nav className="d-flex flex-column">
            <Row
              className="py-3 pl-3"
              style={{
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: "100",
              }}
            >
              <Col className="pr-5">EXPLORER</Col>
              <Col className="pr-5 d-none d-md-block"></Col>
              <Col xs="auto" className="pr-5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </Col>
            </Row>
            <Container
              style={{
                background: "#333333",
                padding: 0,
              }}
              fluid
            >
              <Navbar.Brand
                className="py-2 pl-3"
                style={{
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
                  ></path>
                </svg>{" "}
                DHRUVAM ZAVERI
              </Navbar.Brand>
            </Container>
            <Nav.Link href="/" className="p-0">
              <File title="Home.js" logo={<JsLogo />} />
            </Nav.Link>
            <Nav.Link href="/aboutme" className="p-0">
              <File title="AboutMe.py" logo={<PyLogo />} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FilesBar;
