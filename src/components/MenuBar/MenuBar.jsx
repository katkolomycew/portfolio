import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import styles from "./MenuBar.module.scss";

class MenuBar extends Component {
  render() {
    return (
      <section className={styles.barBackground}>
        <p className={styles.barLogo}>KK</p>
        <FontAwesomeIcon icon={faHome} class="fas fa-home" />
        <FontAwesomeIcon icon={faBriefcase} class="fas fa-briefcase" />
        <FontAwesomeIcon icon={faEdit} class="fas fa-edit" />
        <FontAwesomeIcon icon={faPaperPlane} class="fas fa-paper-plane" />
        <article className={styles.barSocial}>
          <FontAwesomeIcon icon={faLinkedin} class="fab fa-linkedin" />
          <FontAwesomeIcon icon={faGithub} class="fab fa-github" />
        </article>
      </section>
    );
  }
}

export default MenuBar;
