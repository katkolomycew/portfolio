import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Homepage from "../Homepage/Homepage";
import Blog from "../Blog/Blog";
import Work from "../Work/Work";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="/" />
        <Homepage path="/" />
        <Work path="/work" />
        <Blog path="/blog" />
      </Router>
    );
  }
}
