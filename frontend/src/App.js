import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import TabBar from "./Components/TabBar.js";
import SideBar from "./Components/SideBar.js";
import FilesBar from "./Components/FilesBar.js";
import HomeScreen from "./Screens/HomeScreen.js";
import AboutMeScreen from "./Screens/AboutMeScreen.js";
import ResumeScreen from "./Screens/ResumeScreen.js";
import PortfolioScreen from "./Screens/PortfolioScreen.js";
import ContactMeScreen from "./Screens/ContactMeScreen.js";

const App = (props) => {
  return (
    <Router>
      <Container className="p-0 m-0">
        <React.StrictMode>
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/aboutme" component={AboutMeScreen} exact />
            <Route path="/resume" component={ResumeScreen} exact />
            <Route path="/portfolio" component={PortfolioScreen} exact />
            <Route path="/contactme" component={ContactMeScreen} exact />
          </Container>
          <Header />
          <TabBar />
          <SideBar />
        </React.StrictMode>
        <FilesBar />
      </Container>
    </Router>
  );
};

export default App;
