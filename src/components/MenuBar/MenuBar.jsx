import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import styles from "./MenuBar.module.scss";

class MenuBar extends Component {
  state = {
    showHomeText: false,
    showWorkText: false,
    showCvText: false,
    showContactText: false
  };

  showHomeText = () => {
    this.setState({
      showHomeText: !this.state.showHomeText
    });
  };

  showWorkText = () => {
    this.setState({
      showWorkText: !this.state.showWorkText
    });
  };

  showCvText = () => {
    this.setState({
      showCvText: !this.state.showCvText
    });
  };

  showContactText = () => {
    this.setState({
      showContactText: !this.state.showContactText
    });
  };

  render() {
    return (
      <section className={styles.barBackground}>
        <p className={styles.barLogo}>KK</p>
        <a
          href="/"
          ref="home"
          id={styles.home}
          onMouseEnter={() => this.showHomeText()}
          onMouseLeave={() => this.showHomeText()}
        >
          <div style={{ opacity: this.state.showHomeText ? 0 : 1 }}>
            <FontAwesomeIcon icon={faHome} className={styles.homeIcon} />
          </div>
          <p style={{ opacity: this.state.showHomeText ? 1 : 0 }}>Home</p>
        </a>
        <a
          href="/work"
          ref="work"
          id={styles.work}
          onMouseEnter={() => this.showWorkText()}
          onMouseLeave={() => this.showWorkText()}
        >
          <div style={{ opacity: this.state.showWorkText ? 0 : 1 }}>
            <FontAwesomeIcon icon={faBriefcase} className={styles.workIcon} />
          </div>
          <p style={{ opacity: this.state.showWorkText ? 1 : 0 }}>Work</p>
        </a>
        <a
          href="/cv"
          ref="cv"
          id={styles.cv}
          onClick={this.handleClick}
          onMouseEnter={() => this.showCvText()}
          onMouseLeave={() => this.showCvText()}
        >
          <div style={{ opacity: this.state.showCvText ? 0 : 1 }}>
            <FontAwesomeIcon icon={faFile} className={styles.cvIcon} />
          </div>
          <p style={{ opacity: this.state.showCvText ? 1 : 0 }}>CV</p>
        </a>
        <a
          href="/contact"
          ref="contact"
          id={styles.contact}
          onMouseEnter={() => this.showContactText()}
          onMouseLeave={() => this.showContactText()}
        >
          <div style={{ opacity: this.state.showContactText ? 0 : 1 }}>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className={styles.contactIcon}
            />
          </div>
          <p style={{ opacity: this.state.showContactText ? 1 : 0 }}>Contact</p>
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
