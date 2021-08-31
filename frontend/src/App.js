import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import TabBar from "./Components/TabBar.js";
import SideBar from "./Components/SideBar.js";
import FilesBar from "./Components/FilesBar.js";
import HomeScreen from "./Screens/HomeScreen.js";
import AboutMeScreen from "./Screens/AboutMeScreen.js";
import ResumeScreen from "./Screens/ResumeScreen.js";
import ProjectsScreen from "./Screens/ProjectsScreen.js";
import ContactMeScreen from "./Screens/ContactMeScreen.js";
import "./index.css";

const App = () => {
  return (
    <Router>
      <React.StrictMode>
        <Container className="main_content_container">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/aboutme" component={AboutMeScreen} exact />
          <Route path="/resume" component={ResumeScreen} exact />
          <Route path="/projects" component={ProjectsScreen} exact />
          <Route path="/contactme" component={ContactMeScreen} exact />
        </Container>
        <Header />
        <TabBar />
        <SideBar />
        <FilesBar />
        <Footer />
      </React.StrictMode>
    </Router>
  );
};

export default App;
