import React from "react";
import { Navbar, Row, Col, Container, Nav } from "react-bootstrap";
import File from "./File.js";

export const FilesBar = () => {
  const jsLogo = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 32 32"
      height="1.25em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "yellow" }}
    >
      <path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path>
    </svg>
  );

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
        <Navbar.Collapse
          className="d-flex flex-column"
          expand="sm"
          id="basic-navbar-nav"
        >
          <Nav className="me-auto d-none d-sm-block">
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
              <Col className="pr-5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>{" "}
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
                  ></path>
                </svg>{" "}
                DHRUVAM ZAVERI
              </Navbar.Brand>
            </Container>
            <File title="Home.js" logo={jsLogo} link="/" />
            <File title="AboutMe.js" logo={jsLogo} link="/about" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FilesBar;
