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
        <a href="/">
          <FontAwesomeIcon icon={faHome} className={styles.homeIcon} />
        </a>
        <a href="/work">
          <FontAwesomeIcon icon={faBriefcase} className={styles.workIcon} />
        </a>
        <a href="/blog">
          <FontAwesomeIcon icon={faEdit} className={styles.blogIcon} />
        </a>
        <a href="/cv">
          <FontAwesomeIcon icon={faFile} className={styles.cvIcon} />
        </a>
        <a href="/contact">
          <FontAwesomeIcon icon={faPaperPlane} className={styles.contactIcon} />
        </a>
        <article className={styles.barSocial}>
          <a
            href="https://www.linkedin.com/in/kat-kolomycew/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles.linkedinIcon}
            />
          </a>
          <a
            href="https://github.com/katkolomycew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className={styles.githubIcon} />
          </a>
        </article>
      </section>
    );
  }
}

export default MenuBar;
