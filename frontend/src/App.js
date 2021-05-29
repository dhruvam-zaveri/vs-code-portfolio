import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import TabBar from "./Components/TabBar.js";
import SideBar from "./Components/SideBar.js";
import FilesBar from "./Components/FilesBar.js";
import HomeScreen from "./Screens/HomeScreen.js";
import AboutMeScreen from "./Screens/AboutMeScreen.js";

const App = () => {
  return (
    <Router>
      <Header />
      <TabBar />
      <SideBar />
      <FilesBar />
      <Container>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/about" component={AboutMeScreen} exact />
      </Container>
    </Router>
  );
};

export default App;
