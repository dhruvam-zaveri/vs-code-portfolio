import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import TabBar from "./Components/TabBar.js";
import SideBar from "./Components/SideBar.js";
import FilesBar from "./Components/FilesBar.js";
import "./index.css";

const Loading = () => <div>Loading...</div>;
const AsyncHomeScreen = Loadable({
  loader: () => import("./Screens/HomeScreen.js"),
  loading: Loading,
});
const AsyncAboutMeScreen = Loadable({
  loader: () => import("./Screens/AboutMeScreen.js"),
  loading: Loading,
});
const AsyncResumeScreen = Loadable({
  loader: () => import("./Screens/ResumeScreen.js"),
  loading: Loading,
});
const AsyncProjectsScreen = Loadable({
  loader: () => import("./Screens/ProjectsScreen.js"),
  loading: Loading,
});
const AsyncContactMeScreen = Loadable({
  loader: () => import("./Screens/ContactMeScreen.js"),
  loading: Loading,
});

const App = () => {
  return (
    <Router>
      <React.StrictMode>
        <Container className="main_content_container">
          <Route path="/" component={AsyncHomeScreen} exact />
          <Route path="/aboutme" component={AsyncAboutMeScreen} exact />
          <Route path="/resume" component={AsyncResumeScreen} exact />
          <Route path="/projects" component={AsyncProjectsScreen} exact />
          <Route path="/contactme" component={AsyncContactMeScreen} exact />
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
