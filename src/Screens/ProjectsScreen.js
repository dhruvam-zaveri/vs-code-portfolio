import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ProjectCard } from "../Components/ProjectCard.js";
import "./css/projectspage.css";
import "../index.css";

export const PortfolioScreen = () => {
  return (
    <Container
      className="p-0 m-0 page_content_alignment main_content_height"
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
              <ProjectCard
                img="./assets/project_img/vscode.jpg"
                title="VSCode themed portfolio website"
                text="You are viewing the project right now."
                technology_arr={[
                  "React.JS",
                  "ReactBootstrap",
                  "Heroku",
                  "AdobeXD",
                ]}
                external_link="https://pdhruvam-zaveri.codes"
              />

              <ProjectCard
                img="./assets/project_img/proshop.jpg"
                title="Proshop"
                text="An E-Commerce website with online payment option, aimed at providing minimalistic UI and UX."
                technology_arr={[
                  "MongoDB",
                  "Express.JS",
                  "React.JS",
                  "Node.JS",
                  "Heroku",
                  "Postman",
                ]}
                external_link="https://proshop-webapp-0.herokuapp.com/"
              />

              <ProjectCard
                img="./assets/project_img/mapar.jpg"
                title="MapAR"
                text="A web based application that can render 2D map data in .osm format in 3D."
                technology_arr={["Unity3D", "HTML", "CSS", "Firebase"]}
                external_link="https://map-ar-d1743.web.app/"
              />

              <ProjectCard
                img="./assets/project_img/social_distancing.jpg"
                title="Social distancing detector"
                text="Detects and calculates distance between people in a video to determine if social distance is maintained."
                technology_arr={[
                  "Python",
                  "Computer Vision",
                  "Digital Image Processing",
                ]}
                external_link="https://github.com/dhruvam-zaveri/Social-distancing-tracker"
              />

              <ProjectCard
                img="./assets/project_img/photographer.jpg"
                title="Portfolio website for a photographer"
                text="Frontend design for portfolio website of a photographer."
                technology_arr={["AdobeXD", "HTML", "CSS", "Javascript"]}
                external_link="https://photographer-portfolio-f5018.web.app/"
              />

              <ProjectCard
                img="./assets/project_img/schoolby.jpg"
                title="SchoolBy"
                text="A mobile app that can suggest schools nearby the user based on GPS location from a custom designed database"
                technology_arr={["Flutter", "Google APIs", "Firebase"]}
                external_link="https://github.com/dhruvam-zaveri/SchoolBy/"
              />

              <ProjectCard
                img="./assets/project_img/portfolio.jpg"
                title="My old portfolio website"
                text="My previous portfolio website, which has non-convertional UI."
                technology_arr={["HTML", "CSS", "Github Pages", "Adobe XD"]}
                external_link="https://old-portfolio-dz.web.app/"
              />

              <ProjectCard
                img="./assets/project_img/zombieland.jpg"
                title="ZombieLand"
                text="A survival First person shooter game. Available on Windows, MacOS and Android."
                technology_arr={["Unity3D"]}
                external_link="https://github.com/dhruvam-zaveri/ZombieLand"
              />

              <ProjectCard
                img="./assets/project_img/chemicals.jpg"
                title="Chemicals Segregation"
                text="Classifying chemicals on the basis of 3 given attibutes."
                technology_arr={["Python", "Machine Learning"]}
                external_link="https://github.com/dhruvam-zaveri/Chemicals-Segregations"
              />

              <ProjectCard
                img="./assets/project_img/linear.jpg"
                title="Application of Linear Regression"
                text="Predicting the score a student will get, given the amount of time spent on coding daily."
                technology_arr={["Python", "Machine Learning"]}
                external_link="https://github.com/dhruvam-zaveri/Application-of-Liner-Regression/"
              />

              <ProjectCard
                img="./assets/project_img/diabetes.jpg"
                title="Diabetes Detection"
                text="Classifying a person as diabetic or non-diabetic using K-Nearest Neighbors classifier."
                technology_arr={["Python", "Machine Learning"]}
                external_link="https://github.com/dhruvam-zaveri/Diabetes-Detection"
              />

              <ProjectCard
                img="./assets/project_img/pollution.jpg"
                title="Predicting Air Pollution Levels"
                text="From the use of data collected from different locations in New Delhi and ML algorithm, predicting the air quality index."
                technology_arr={["Python", "Machine Learning"]}
                external_link="https://github.com/dhruvam-zaveri/Predicting-Air-Pollution-Levels"
              />

              <ProjectCard
                img="./assets/project_img/chess.jpg"
                title="ASCII Chess"
                text="One of my projects purely based on logic. For authentic chess playing experience defined all the rules and techniques of chess."
                technology_arr={["C++"]}
                external_link="https://github.com/dhruvam-zaveri/ASCII-Chess"
              />

              <ProjectCard
                img="./assets/project_img/snake.jpg"
                title="Snake Game"
                text="A simple snake game to reminisce about gaming in childhood."
                technology_arr={["C"]}
                external_link="https://github.com/dhruvam-zaveri/Application-of-Liner-Regression/"
              />
            </Masonry>
          </ResponsiveMasonry>
        </Col>
      </Row>
      <Row className="p-4"></Row>
    </Container>
  );
};

export default PortfolioScreen;
