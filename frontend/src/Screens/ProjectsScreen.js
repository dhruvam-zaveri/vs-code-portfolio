import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ExternalLinkLogo } from "../Components/Logos.js";
import "./css/projectspage.css";

export const PortfolioScreen = () => {
  return (
    <Container
      className="p-0 m-0 page_content_alignment"
      style={{
        color: "white",
      }}
    >
      <Row>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="d-none d-sm-block"
        >
          <Row sm="auto" xs="auto" className="px-5 d-none d-sm-block"></Row>
        </Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="d-none d-sm-block"
        >
          <Row sm="auto" xs="auto" className="px-5 d-none d-sm-block"></Row>
        </Col>

        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="d-none d-sm-block"
        >
          <Row sm="auto" xs="auto" className="px-1 d-none d-lg-block"></Row>
        </Col>

        <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
          <Row sm="auto" xs="auto" className="px-5 d-none d-lg-block"></Row>
        </Col>

        <Col>
          <Col className="py-1 project_page_title">PROJECTS</Col>
          <Col className="personal_statement">
            A collection of projects I have worked on individually or as a part
            of a team.
          </Col>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 770: 2, 1000: 3 }}
          >
            <Masonry gutter={20}>
              <Card className="project_card">
                <Card.Img src="./assets/project_img/proshop.jpg" flush />
                <Card.Body>
                  <Card.Title>Proshop</Card.Title>
                  <Card.Text>
                    An E-Commerce website with online payment option, aimed at
                    providing minimalistic UI and UX.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      MongoDB
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Express.JS
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      React.JS
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Node.JS
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Heroku
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Postman
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://proshop-webapp-0.herokuapp.com/"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/mapar.jpg" flush />
                <Card.Body>
                  <Card.Title>MapAR</Card.Title>
                  <Card.Text>
                    A web based application that can render 2D map data in .osm
                    format in 3D.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Unity3D
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      HTML
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      CSS
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Firebase
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://map-ar-d1743.web.app/"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img
                  src="./assets/project_img/social_distancing.jpg"
                  flush
                />
                <Card.Body>
                  <Card.Title>Social distancing detector</Card.Title>
                  <Card.Text>
                    Detects and calculates distance between people in a video to
                    determine if social distance is maintained.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Python
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Computer Vision
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Digital Image Processing
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Social-distancing-tracker"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/photographer.jpg" flush />
                <Card.Body>
                  <Card.Title>Portfolio website for a photographer</Card.Title>
                  <Card.Text>
                    Frontend design for portfolio website of a photographer.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Adobe XD
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      HTML
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      CSS
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Javascript
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://photographer-portfolio-f5018.web.app/"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/schoolby.jpg" flush />
                <Card.Body>
                  <Card.Title>SchoolBy</Card.Title>
                  <Card.Text>
                    A mobile app that can suggest schools nearby the user based
                    on GPS location from a custom designed database.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Flutter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Google APIs
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Firebase
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/SchoolBy/"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/portfolio.jpg" flush />
                <Card.Body>
                  <Card.Title>My old portfolio website</Card.Title>
                  <Card.Text>
                    My previous portfolio website, which has non-convertional
                    UI.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      HTML
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      CSS
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Github Pages
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Adobe XD
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://old-portfolio-dz.web.app/"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/zombieland.jpg" flush />
                <Card.Body>
                  <Card.Title>ZombieLand</Card.Title>
                  <Card.Text>
                    A survival First person shooter game. Available on Windows,
                    MacOS and Android.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Unity3D
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/ZombieLand"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/chemicals.jpg" flush />
                <Card.Body>
                  <Card.Title>Chemicals Segregation</Card.Title>
                  <Card.Text>
                    Classifying chemicals on the basis of 3 given attibutes.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Python
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Machine Learning
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Chemicals-Segregations"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/linear.jpg" flush />
                <Card.Body>
                  <Card.Title>Application of Linear Regression</Card.Title>
                  <Card.Text>
                    Predicting the score a student will get, given the amount of
                    time spent on coding daily.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Python
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Machine Learning
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Application-of-Liner-Regression/"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/diabetes.jpg" flush />
                <Card.Body>
                  <Card.Title>Diabetes Detection</Card.Title>
                  <Card.Text>
                    Classifying a person as diabetic or non-diabetic using
                    K-Nearest Neighbors classifier.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Python
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Machine Learning
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Diabetes-Detection"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/pollution.jpg" flush />
                <Card.Body>
                  <Card.Title>Predicting Air Pollution Levels</Card.Title>
                  <Card.Text>
                    From the use of data collected from different locations in
                    New Delhi and ML algorithm, predicting the air quality
                    index.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Python
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      Machine Learning
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Predicting-Air-Pollution-Levels"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/chess.jpg" flush />
                <Card.Body>
                  <Card.Title>ASCII Chess</Card.Title>
                  <Card.Text>
                    One of my projects purely based on logic. For authentic
                    chess playing experience defined all the rules and
                    techniques of chess.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      C++
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/ASCII-Chess"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="project_card">
                <Card.Img src="./assets/project_img/snake.jpg" flush />
                <Card.Body>
                  <Card.Title>Snake Game</Card.Title>
                  <Card.Text>
                    A simple snake game to reminisce about gaming in childhood.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="outline"
                      size="sm"
                      className="technologies_btn"
                    >
                      C
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Application-of-Liner-Regression/"
                      target="_blank"
                      size="sm"
                      className="external_link_button"
                    >
                      <ExternalLinkLogo />
                      {" View Project"}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Masonry>
          </ResponsiveMasonry>
        </Col>
      </Row>
      <Row className="p-4"></Row>
    </Container>
  );
};

export default PortfolioScreen;
