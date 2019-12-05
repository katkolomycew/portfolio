import React, { Component } from "react";
import kkBackground from "./images/kkBackground.jpg";
import kkResponsive from "./images/kkResponsive.jpg";
import styles from "./HeaderImage.module.scss";

class HeaderImage extends Component {
  render() {
    return (
      <>
        <img
          src={kkBackground}
          alt="background"
          className={styles.backgroundImage}
        />
        <img
          src={kkResponsive}
          alt="responsive"
          className={styles.backgroundResponsive}
        />
      </>
    );
  }
}

export default HeaderImage;
