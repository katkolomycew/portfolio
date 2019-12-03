import React, { Component } from "react";
import incollabMacbook from "./images/incollabMacbook.png";
import incollabIphone from "./images/incollabIphone.png";
import tugMacbook from "./images/tugMacbook.png";
import tugIphone from "./images/tugIphone.png";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import styles from "./Work.module.scss";

class Work extends Component {
  render() {
    return (
      <section>
        <HeaderImage />
        <MenuBar />
        <div className={styles.workBackground}>
          <img
            src={incollabMacbook}
            alt="macbook"
            className={styles.incollabMacbook}
          />
          <img
            src={incollabIphone}
            alt="iphone"
            className={styles.incollabIphone}
          />
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
            <li>Firebase</li>
            <li>SCRUM</li>
            <li>Agile</li>
            <li>NoSQL</li>
            <li>GitHub</li>
            <li>Authentication</li>
            <li>Authorisation</li>
            <li>Hosting</li>
            <li>React</li>
            <li>JSX</li>
          </ul>
          <p className={styles.workBreak}>......</p>
          <img src={tugMacbook} alt="macbook" className={styles.tugMacbook} />
          <img src={tugIphone} alt="iphone" className={styles.tugIphone} />
          <h1 className={styles.incollabTitle}>Tug of War</h1>
          <p className={styles.incollabText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium excepturi tempore laudantium facere praesentium
            perferendis. A quam iure unde quae aut, sed veniam saepe! Dolorem
            sequi qui veniam tempore ex?
          </p>
          <ul className={styles.incollabSkills}>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>GitHub</li>
            <li>Hosting</li>
          </ul>
          <p className={styles.workBreak}>......</p>
        </div>
      </section>
    );
  }
}

export default Work;
