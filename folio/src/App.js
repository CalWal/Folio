import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Picture from "./components/Picture";
import AboutMe from "./components/AboutMe";
import Info from "./components/Info";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Picture />
        <AboutMe />
        <Info />
        <Projects />
      </div>
    );
  }
}

export default App;
