import React, { Component } from "react";
import styles from "./MenuBar.module.scss";

class MenuBar extends Component {
  render() {
    return (
      <section className={styles.barBackground}>
        <p className={styles.barLogo}>KK</p>
        <p>Work</p>
        <p>Blog</p>
        <p>Contact</p>
        <article className={styles.barSocial}>
          <p>L</p>
          <p>G</p>
        </article>
      </section>
    );
  }
}

export default MenuBar;
