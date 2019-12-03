import React, { Component } from "react";
import kkBackground from "./images/kkBackground.jpg";
import styles from "./HeaderImage.module.scss";

class HeaderImage extends Component {
  render() {
    return (
      <img
        src={kkBackground}
        alt="background"
        className={styles.backgroundImage}
      />
    );
  }
}

export default HeaderImage;
