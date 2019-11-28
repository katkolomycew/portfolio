import React, { Component } from "react";
import Homepage from "../Homepage/Homepage";
import Work from "../Work/Work";
import Blog from "../Blog/Blog";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <Router>
        <Homepage path="/" />
        <Work path="/work" />
        <Blog path="/blog" />
      </Router>
    );
  }
}

export default App;
