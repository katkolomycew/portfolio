import React, { Component } from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import resume from "./images/resume.jpg";
import styles from "./CV.module.scss";

class CV extends Component {
  render() {
    return (
      <section>
        <HeaderImage />
        <MenuBar />
        <div className={styles.cvBackground}>
          <img src={resume} alt="resume" className={styles.cvResume} />
          <form
            action="https://www.dropbox.com/s/wlk1eednzad05a8/KKCV-4.pdf?dl=0"
            target="_blank"
          >
            <button>Download my CV</button>>
          </form>
        </div>
      </section>
    );
  }
}

export default CV;
