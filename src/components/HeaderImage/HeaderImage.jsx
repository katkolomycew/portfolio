import React, { Component } from "react";
import kkBackground from "./images/kkBackground.jpg";
import "./HeaderImage.module.scss";

class HeaderImage extends Component {
  render() {
    return <img src={kkBackground} alt="background" />;
  }
}

export default HeaderImage;
