import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HorizontalPadding from "./HorizontalPadding.js";
import Tab from "./Tab.js";
import { JsLogo, PyLogo } from "./Logos.js";

export const TabBar = () => {
  const { pathname } = useLocation();

  var title;
  var logo;

  switch (pathname) {
    case "/aboutme":
      title = "AboutMe.py";
      logo = <PyLogo />;
      break;

    // case "":
    //   break;

    default:
      title = "Home.js";
      logo = <JsLogo />;
  }

  return (
    <Container
      style={{
        background: "#2A2A2C",
        color: "#808080",
        boxShadow: "0 6px 11px -9px #000000",
        position: "fixed",
        top: "26px",
      }}
      fluid
    >
      <Row>
        <HorizontalPadding />
        <Col lg="auto" md="auto" sm="auto" xs="auto">
          <Tab title={title} logo={logo} />
        </Col>
        <Col>
          <Row className="d-flex justify-content-end">
            <Col lg="auto" md="auto" sm="auto" xs="auto" className="py-1">
              <Row>
                <Col className="d-none d-lg-block px-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 010 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Col>
                <Col className="d-none d-lg-block px-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.389 12.99l-1.27-1.27.67-.7 2.13 2.13v.7l-2.13 2.13-.71-.71L7.349 14h-1.85a2.49 2.49 0 0 1-2.5-2.5V5.95a2.59 2.59 0 0 1-1.27-.68 2.52 2.52 0 0 1-.54-2.73A2.5 2.5 0 0 1 3.499 1a2.45 2.45 0 0 1 1 .19 2.48 2.48 0 0 1 1.35 1.35c.133.317.197.658.19 1a2.5 2.5 0 0 1-2 2.45v5.5a1.5 1.5 0 0 0 1.5 1.5h1.85zm-4.68-8.25a1.5 1.5 0 0 0 2.08-2.08 1.55 1.55 0 0 0-.68-.56 1.49 1.49 0 0 0-.86-.08 1.49 1.49 0 0 0-1.18 1.18 1.49 1.49 0 0 0 .08.86c.117.277.311.513.56.68zm10.33 6.3c.48.098.922.335 1.27.68a2.51 2.51 0 0 1 .31 3.159 2.5 2.5 0 1 1-3.47-3.468c.269-.182.571-.308.89-.37V5.49a1.5 1.5 0 0 0-1.5-1.5h-1.85l1.27 1.27-.71.71-2.13-2.13v-.7l2.13-2.13.71.71-1.27 1.27h1.85a2.49 2.49 0 0 1 2.5 2.5v5.55zm-.351 3.943a1.5 1.5 0 0 0 1.1-2.322 1.55 1.55 0 0 0-.68-.56 1.49 1.49 0 0 0-.859-.08 1.49 1.49 0 0 0-1.18 1.18 1.49 1.49 0 0 0 .08.86 1.5 1.5 0 0 0 1.539.922z"
                    />
                  </svg>
                </Col>
                <Col className="d-none d-lg-block px-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zM8 13H3V2h5v11zm6 0H9V2h5v11z" />
                  </svg>
                </Col>
                <Col className="pl-1 pr-2">
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
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TabBar;
