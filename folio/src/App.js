import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "/components/Header";
import Photo from "/components/Photo";
import ContactInfo from "./components/ContactInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Photo />
        <ContactInfo />
      </div>
    );
  }
}

export default App;
