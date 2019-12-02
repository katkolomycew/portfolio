import React, { Component } from "react";
import macbook from "./images/macbook.png";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import styles from "./Work.module.scss";

class Work extends Component {
  render() {
    return (
      <section>
        <img src={macbook} alt="macbook" className={styles.workBackground} />
        <HeaderImage />
        <MenuBar />
      </section>
    );
  }
}

export default Work;
