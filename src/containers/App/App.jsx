import React, { Component } from "react";
import Homepage from "../Homepage/Homepage";
import Work from "../Work/Work";
import Blog from "../Blog/Blog";
import CV from "../CV/CV";
import Contact from "../Contact/Contact";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <Router>
        <Homepage path="/" />
        <Work path="/work" />
        <Blog path="/blog" />
        <CV path="/cv" />
        <Contact path="/contact" />
      </Router>
    );
  }
}

export default App;
