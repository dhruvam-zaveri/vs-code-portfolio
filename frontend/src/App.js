import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "./Components/Header.js";
import TabBar from "./Components/TabBar.js";
import SideBar from "./Components/SideBar.js";
import FilesBar from "./Components/FilesBar.js";

const App = () => {
  return (
    <>
      <Header />
      <SideBar />
      <FilesBar />
      {/* <TabBar /> */}
    </>
  );
};

export default App;
