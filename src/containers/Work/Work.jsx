import React, { Component } from "react";
import macbook from "./images/macbook.png";
import iphone from "./images/iphone.png";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import styles from "./Work.module.scss";

class Work extends Component {
  render() {
    return (
      <section className={styles.workWrapper}>
        <HeaderImage />
        <MenuBar />
        <article className={styles.workIncollab}>
          <img src={macbook} alt="macbook" className={styles.workMacbook} />
          <img src={iphone} alt="iphone" className={styles.workIphone} />
          <h1 className={styles.incollabTitle}>In Collaboration</h1>
          <p className={styles.incollabText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ad at
            dolore non porro, nobis beatae doloribus magni error provident. Iure
            consectetur voluptas consequuntur repudiandae asperiores commodi hic
            assumenda quas?
          </p>
          <ul className={styles.incollabSkills}>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>JSX</li>
            <li>Firebase</li>
            <li>SCRUM</li>
            <li>iOS</li>
            <li>Agile</li>
            <li>Authorisation</li>
            <li>Authentication</li>
            <li>NoSQL</li>
            <li>GitHub</li>
            <li>Windows</li>
            <li>Hosting</li>
            <li>React</li>
          </ul>
          <p className={styles.workBreak}>......</p>
        </article>
      </section>
    );
  }
}

export default Work;
