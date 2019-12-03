import React, { Component } from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import styles from "./CV.module.scss";

class CV extends Component {
  render() {
    return (
      <section>
        <HeaderImage />
        <MenuBar />
        <p className={styles.cvTitle}>Download my CV!</p>
      </section>
    );
  }
}

export default CV;
