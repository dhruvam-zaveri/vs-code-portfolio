import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./css/resumepage.css";
import "../index.css";

export const ResumeScreen = () => {
  return (
    <Container
      className="page_content_alignment main_content_height"
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
          className="px-4"
        ></Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="px-5 d-none d-sm-block"
        ></Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="px-5 d-none d-sm-block"
        ></Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="px d-none d-md-block"
        ></Col>
        <Col
          xl="auto"
          lg="auto"
          md="auto"
          sm="auto"
          xs="auto"
          className="px-3 d-none d-xl-block"
        ></Col>
        <Col>
          <Col className="pt-3 pb-1 resume_page_title">RESUME</Col>
          <Col className="personal_statement">
            A versatile software engineer with a passion for leadership, seeking
            a challenging role to leverage technical prowess and deliver
            exceptional software solutions. Proficient at quickly adapting to
            diverse technologies and environments, I excel with mentorship and
            embrace new opportunities. Committed to continuous learning and
            driving innovation, I aspire to make a meaningful impact by
            optimizing processes, elevating organizational performance, and
            staying at the forefront of technology trends.
          </Col>
          <Row className="py-2 content_row">
            <Col xl={7} lg={7} sm={12} xs={12}>
              <Row className="section_title">Work Experience</Row>
              <Col className="section_content">
                <Row className="work_title">Software Engineer</Row>
                <Row>
                  Motorola Solutions, India
                  <Button
                    href="https://www.linkedin.com/company/motorolasolutions/"
                    className="external_link"
                  >
                    <svg
                      stroke="#fff"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </Row>
                <Row className="date">May 2022 - Present</Row>
                <Row className="work_description p-0 m-0">
                  <ul>
                    <li>
                      Delegated the project tasks and managed the storyboard.{" "}
                      <b>(Cloud Infrastructure and Engineering team)</b>
                    </li>

                    <li>
                      Led a team to develop a REST API for the cluster
                      orchestration pipeline over microservice architecture.{" "}
                      <b>(Cloud Infrastructure and Engineering team)</b>
                    </li>

                    <li>
                      Automated cluster bootstrapping along with installation as
                      well as modification of inter-pod communication service,
                      internal load balancing via nginx, and external DNS as per
                      partner's requirements.{" "}
                      <b>(Cloud Infrastructure and Engineering team)</b>
                    </li>

                    <li>
                      Managed to build and optimize the cluster resource
                      architecture similar to one existing on Azure, on AWS.{" "}
                      <b>(Cloud Infrastructure and Engineering team)</b>
                    </li>

                    <li>
                      Developed the codebase to spin up, manage and deallocate
                      multi-site K8s clusters as well as other supporting
                      resources from various cloud providers like Azure and AWS.{" "}
                      <b>(Cloud Infrastructure and Engineering team)</b>
                    </li>
                    <li>
                      Improved container upgrade time by 20% for the.{" "}
                      <b>(Product Automation team)</b>
                    </li>
                  </ul>
                </Row>
              </Col>

              <Row className="section_title">Internships</Row>

              <Col className="section_content">
                <Row className="work_title">Internship traniee</Row>
                <Row>
                  Motorola Solutions, India
                  <Button
                    href="https://www.linkedin.com/company/motorolasolutions/"
                    className="external_link"
                  >
                    <svg
                      stroke="#fff"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </Row>
                <Row className="date">Jul 2021 - Apr 2022</Row>
                <Row className="work_description p-0 m-0">
                  <ul>
                    <li>
                      Improved container launch time for fresh installation by
                      25%. <b>(Product Automation team)</b>
                    </li>

                    <li>
                      Orchestrated server cluster configuration with multiple
                      VMs as well as micro services configuration automation.{" "}
                      <b>(Product Automation team)</b>
                    </li>

                    <li>
                      Reduced subscriber provisioning time on one module
                      consisting of 7 subroutines of an existing product by
                      120%. <b>(Site Reliability Engineering team)</b>
                    </li>
                    <li>
                      Optimized the architecture for an existing product
                      consisting of 2 system modules.{" "}
                      <b>(Site Reliability Engineering team)</b>
                    </li>
                  </ul>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="work_title">
                  Mobile app and web development intern
                </Row>
                <Row>
                  KrsikX India
                  <Button
                    href="https://www.linkedin.com/company/krsikx-india-llp/"
                    className="external_link"
                  >
                    <svg
                      stroke="#fff"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </Row>
                <Row className="date">May 2021 - Jul 2021</Row>
                <Row className="work_description p-0 m-0">
                  <ul>
                    <li>
                      Collaborated with 3 teams and worked on a wide range of
                      technologies.
                    </li>
                    <li>
                      Redesigned and upgraded UI for an existing web app and
                      implemented the same using React.JS and Material UI.
                    </li>
                    <li>Devised UI/UX for 4 projects.</li>
                    <li>
                      Developed 2 APIs to be used with web and flutter apps and
                      1 with IoT systems.
                    </li>
                    <li>
                      Remodeled the API architecture for an existing project to
                      optimize the load on the hosting servers.
                    </li>
                  </ul>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="work_title">
                  Machine Learning and Backend Intern
                </Row>
                <Row>
                  Inficube Technolabs
                  <Button
                    href="https://www.linkedin.com/company/inficube/"
                    className="external_link"
                  >
                    <svg
                      stroke="#fff"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </Row>
                <Row className="date">Mar 2021 - Apr 2021</Row>
                <Row className="work_description p-0 m-0">
                  <ul>
                    <li>
                      Worked on a project of Automatic license plate
                      recognization and license plate reader.
                    </li>
                    <li>
                      Trained and tested a Computer Vision model for the
                      above-given application.
                    </li>
                    <li>
                      Designed the Database architecture and connected it with
                      the website.
                    </li>
                  </ul>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="work_title">Business team </Row>
                <Row>
                  GeeksforGeeks Student Chapter - CHARUSAT
                  <Button
                    href="https://www.linkedin.com/company/geeksforgeeks-student-chapter-cu/"
                    className="external_link"
                  >
                    <svg
                      stroke="#fff"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </Row>
                <Row className="date">Sept 2020 - Jul 2021</Row>
                <Row className="work_description p-0 m-0">
                  <ul>
                    <li>
                      Orchestrated several events on online platforms where a
                      large mass of participants was enrolled.
                    </li>
                    <li>
                      Designed events for maximum engagement of the attendees.
                      Successfully campaigned to reach out to 10+ sponsors for 2
                      events.
                    </li>
                    <li>
                      Secured several industry experts for multifarious
                      campaigns spanned throughout the working tenure.
                    </li>
                  </ul>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="work_title">
                  Mobile application Developer (Flutter){" "}
                </Row>
                <Row>
                  GHARDA CHEMICALS LIMITED{" "}
                  <Button
                    href="https://www.linkedin.com/company/gharda-chemicals-limited/"
                    className="external_link"
                  >
                    <svg
                      stroke="#fff"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </Row>
                <Row className="date">Aug 2020 - Nov 2020</Row>
                <Row className="work_description p-0 m-0">
                  <ul>
                    <li>
                      Developed an android app entitled "Polymer product
                      selector app" for Gharda High-performance polymers.
                    </li>
                    <li>
                      This app will aid the distributors and consumers to select
                      the correct grade of High-performance polymer according to
                      its application.
                    </li>
                  </ul>
                </Row>
              </Col>

              <Col className="section_content pb-0">
                <Row className="work_title">Flutter Intern</Row>
                <Row>
                  Prakash Software Solutions Pvt. Ltd{" "}
                  <Button
                    href="https://www.linkedin.com/company/prakashsoftware/"
                    className="external_link"
                  >
                    <svg
                      stroke="#fff"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </Row>
                <Row className="date">Apr 2020 - May 2020</Row>
                <Row className="work_description p-0 m-0">
                  <ul>
                    <li>
                      Developed a mobile application that can aid people in
                      searching schools near their residency.
                    </li>
                    <li>
                      Incorporates GPS to locate and query the database to find
                      schools near their home.
                    </li>
                    <li>
                      Integrated a radius or distance range selection (up to
                      10km) based automatic query system.
                    </li>
                    <li>
                      Setup a custom database with the help of Google services
                      like GoogleMaps and GooglePlaces for 5 urban locations of
                      India.
                    </li>
                  </ul>
                </Row>
              </Col>
            </Col>

            <Col xl={5} lg={5} sm={12} xs={12}>
              <Row className="section_title">Education</Row>

              <Col className="section_content pb-4">
                <Row className="edu_title">
                  B.tech Computer Science and Engineering
                </Row>
                <Row>
                  Charotar University of Science and Technology
                  <Button
                    href="https://www.charusat.ac.in/"
                    className="external_link"
                  >
                    <svg
                      stroke="#fff"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </Row>
                <Row className="date">Jul 2018 - April 2022</Row>
                <Row className="edu_grade">CGPA: 9.5/10.0</Row>
              </Col>

              <Row className="section_title">Projects</Row>
              <Col className="section_content pb-4">
                <Row className="edu_title">
                  All the projects developed my me
                </Row>
                <Row>
                  Visit the projects.css page to view all my projects{" "}
                  <Button href="/projects" className="external_link">
                    <svg
                      stroke="#fff"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Button>
                </Row>
              </Col>

              <Row className="section_title">Skills</Row>

              <Col className="section_content">
                <Row className="edu_title">Leadership and Management</Row>
              </Col>

              <Col className="section_content">
                <Row className="edu_title">
                  Basic understanding of Machine Learning
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="edu_title">Languages</Row>
                <Row>
                  <Row className="skill p-0 m-0">
                    <ul>
                      <li>Python</li>
                      <li>Bicep</li>
                      <li>Ansible</li>
                      <li>Dart</li>
                      <li>Javascript</li>
                      <li>C</li>
                      <li>C++</li>
                      <li>Java</li>
                    </ul>
                  </Row>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="edu_title">Container orchestration</Row>
                <Row>
                  <Row className="skill p-0 m-0">
                    <ul>
                      <li>Kubernetes</li>
                    </ul>
                  </Row>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="edu_title">Cloud Platforms</Row>
                <Row>
                  <Row className="skill p-0 m-0">
                    <ul>
                      <li>Microsoft Azure</li>
                      <li>AWS</li>
                    </ul>
                  </Row>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="edu_title">Prototyping and UI designing</Row>
                <Row>
                  <Row className="skill p-0 m-0">
                    <ul>
                      <li>Adobe XD</li>
                    </ul>
                  </Row>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="edu_title">Frontend</Row>
                <Row>
                  <Row className="skill p-0 m-0">
                    <ul>
                      <li>React.JS</li>
                      <li>Material UI</li>
                      <li>React-bootstrap</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                    </ul>
                  </Row>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="edu_title">Backend</Row>
                <Row>
                  <Row className="skill p-0 m-0">
                    <ul>
                      <li>Express.JS</li>
                      <li>Node.JS</li>
                      <li>Mongoose</li>
                      <li>Flask</li>
                    </ul>
                  </Row>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="edu_title">Database</Row>
                <Row>
                  <Row className="skill p-0 m-0">
                    <ul>
                      <li>MongoDB</li>
                      <li>Postgres</li>
                      <li>MySQL</li>
                      <li>CouchDB</li>
                      <li>Firebase</li>
                    </ul>
                  </Row>
                </Row>
              </Col>

              <Col className="section_content">
                <Row className="edu_title">Version Control</Row>
                <Row>
                  <Row className="skill p-0 m-0">
                    <ul>
                      <li>Git</li>
                      <li>GitHub</li>
                    </ul>
                  </Row>
                </Row>
              </Col>

              <Col className="section_content pb-0">
                <Row className="edu_title">Mobile App development</Row>
                <Row>
                  <Row className="skill p-0 m-0">
                    <ul>
                      <li>Flutter</li>
                    </ul>
                  </Row>
                </Row>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="p-3"></Row>
    </Container>
  );
};

export default ResumeScreen;
