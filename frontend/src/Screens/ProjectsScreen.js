import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ExternalLinkLogo } from "../Components/Logos.js";
import "./css/projectspage.css";

export const PortfolioScreen = () => {
  return (
    <Container
      className="page_content_alignment"
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

        <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
          <Row sm="auto" xs="auto" className="px-5 d-none d-md-block"></Row>
        </Col>

        <Col>
          <Col className="py-1 project_page_title">PROJECTS</Col>
          <Col className="personal_statement">
            A collection of projects I have worked on individually or as a part
            of a team.
          </Col>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter={30}>
              <Card className="project_card">
                <Card.Img src="./assets/project_img/proshop.jpg" flush />
                <Card.Body>
                  <Card.Title>Proshop</Card.Title>
                  <Card.Text>
                    A simplistic E-Commerce website developed with online
                    payment, aimed at providing minimalistic UI and UX.
                  </Card.Text>
                  <Card.Text>
                    <Button variant="outline" size="sm">
                      MongoDB
                    </Button>
                    <Button variant="outline" size="sm">
                      Express.JS
                    </Button>
                    <Button variant="outline" size="sm">
                      React.JS
                    </Button>
                    <Button variant="outline" size="sm">
                      Node.JS
                    </Button>
                    <Button variant="outline" size="sm">
                      Heroku
                    </Button>
                    <Button variant="outline" size="sm">
                      Postman
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://proshop-webapp-0.herokuapp.com/"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    <Button variant="outline" size="sm">
                      Unity3D
                    </Button>
                    <Button variant="outline" size="sm">
                      HTML
                    </Button>
                    <Button variant="outline" size="sm">
                      CSS
                    </Button>
                    <Button variant="outline" size="sm">
                      Firebase
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://map-ar-d1743.web.app/"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    Detects and counts number of people in a video frame and
                    calculates distance between them to determine if safe
                    distance is maintained.
                  </Card.Text>
                  <Card.Text>
                    <Button variant="outline" size="sm">
                      Python
                    </Button>
                    <Button variant="outline" size="sm">
                      Computer vision
                    </Button>
                    <Button variant="outline" size="sm">
                      Digital Image Processing
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Social-distancing-tracker"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    <Button variant="outline" size="sm">
                      Adobe XD
                    </Button>
                    <Button variant="outline" size="sm">
                      HTML
                    </Button>
                    <Button variant="outline" size="sm">
                      CSS
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Portfolio-website-prototype"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    <Button variant="outline" size="sm">
                      Flutter
                    </Button>
                    <Button variant="outline" size="sm">
                      Google APIs
                    </Button>
                    <Button variant="outline" size="sm">
                      Firebase
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/SchoolBy/"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    My previous portfolio website created purely using HTML and
                    CSS and hosted using GitHub pages.
                  </Card.Text>
                  <Card.Text>
                    <Button variant="outline" size="sm">
                      HTML
                    </Button>
                    <Button variant="outline" size="sm">
                      CSS
                    </Button>
                    <Button variant="outline" size="sm">
                      Adobe XD
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Old-portfolio-website"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    A survival First person shooter game. Available on multiple
                    platforms (Windows, MacOS and Android).
                  </Card.Text>
                  <Card.Text>
                    <Button variant="outline" size="sm">
                      Unity3D
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/ZombieLand"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    <Button variant="outline" size="sm">
                      Python
                    </Button>
                    <Button variant="outline" size="sm">
                      Machine Learning
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Chemicals-Segregations"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    <Button variant="outline" size="sm">
                      Python
                    </Button>
                    <Button variant="outline" size="sm">
                      Machine Learning
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Application-of-Liner-Regression/"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    Classification Problem, classify a person as diabetic or
                    non-diabetic using K-Nearest Neighbors classifier.
                  </Card.Text>
                  <Card.Text>
                    <Button variant="outline" size="sm">
                      Python
                    </Button>
                    <Button variant="outline" size="sm">
                      Machine Learning
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Diabetes-Detection"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    <Button variant="outline" size="sm">
                      Python
                    </Button>
                    <Button variant="outline" size="sm">
                      Machine Learning
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Predicting-Air-Pollution-Levels"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    One of my few projects purely based on logic. All the rules
                    and techniques like castling and piece promotion of chess
                    are coded for real chess experience.
                  </Card.Text>
                  <Card.Text>
                    <Button variant="outline" size="sm">
                      C++
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/ASCII-Chess"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
                    A simple snake game written in C language. Purely based on
                    logic and knowledge of C.
                  </Card.Text>
                  <Card.Text>
                    <Button variant="outline" size="sm">
                      C
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant="dark"
                      href="https://github.com/dhruvam-zaveri/Snake-Game"
                      target="_blank"
                      size="sm"
                      style={{
                        backgroundColor: "#212121",
                        alignItems: "center",
                        color: "white",
                        borderColor: "white",
                      }}
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
    </Container>
  );
};

export default PortfolioScreen;
