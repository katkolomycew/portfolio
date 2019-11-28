import React, { Component } from "react";
import styles from "./MenuBar.module.scss";

class MenuBar extends Component {
  render() {
    return (
      <section className={styles.barBackground}>
        <p>Logo</p>
        <p>Home</p>
        <p>Work</p>
        <p>Blog</p>
        <p>Contact</p>
      </section>
    );
  }
}

export default MenuBar;
