import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import styles from "./MenuBar.module.scss";

class MenuBar extends Component {
  render() {
    return (
      <section className={styles.barBackground}>
        <p className={styles.barLogo}>KK</p>
        <FontAwesomeIcon icon={faHome} className={styles.homeIcon} />
        <FontAwesomeIcon icon={faBriefcase} className={styles.workIcon} />
        <FontAwesomeIcon icon={faEdit} className={styles.blogIcon} />
        <FontAwesomeIcon icon={faFile} className={styles.cvIcon} />
        <FontAwesomeIcon icon={faPaperPlane} className={styles.contactIcon} />
        <article className={styles.barSocial}>
          <FontAwesomeIcon icon={faLinkedin} className={styles.linkedinIcon} />
          <FontAwesomeIcon icon={faGithub} className={styles.githubIcon} />
        </article>
      </section>
    );
  }
}

export default MenuBar;
