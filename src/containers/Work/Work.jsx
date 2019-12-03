import React, { Component } from "react";
import incollabMacbook from "./images/incollabMacbook.png";
import incollabIphone from "./images/incollabIphone.png";
import tugMacbook from "./images/tugMacbook.png";
import tugIphone from "./images/tugIphone.png";
import mealMacbook from "./images/mealMacbook.png";
import mealIphone from "./images/mealIphone.png";
import mineMacbook from "./images/mineMacbook.png";
import mineIphone from "./images/mineIphone.png";
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
          <h1 className={styles.workTitle}>In Collaboration</h1>
          <p className={styles.workText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ad at
            dolore non porro, nobis beatae doloribus magni error provident. Iure
            consectetur voluptas consequuntur repudiandae asperiores commodi hic
            assumenda quas?
          </p>
          <ul className={styles.workSkills}>
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
          <h1 className={styles.workTitle}>Tug of War</h1>
          <p className={styles.workText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium excepturi tempore laudantium facere praesentium
            perferendis. A quam iure unde quae aut, sed veniam saepe! Dolorem
            sequi qui veniam tempore ex?
          </p>
          <ul className={styles.workSkills}>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>GitHub</li>
            <li>Hosting</li>
          </ul>
          <p className={styles.workBreak}>......</p>
          <img src={mealMacbook} alt="macbook" className={styles.mealMacbook} />
          <img src={mealIphone} alt="iphone" className={styles.mealIphone} />
          <h1 className={styles.workTitle}>Weekly Mealplans</h1>
          <p className={styles.workText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            perspiciatis porro expedita quo, ipsam repudiandae sequi explicabo
            et, possimus eveniet officiis dolore a architecto quae assumenda
            saepe esse dolorum nulla?
          </p>
          <ul className={styles.workSkills}>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>Hosting</li>
            <li>GitHub</li>
            <li>Responsive Design</li>
          </ul>
          <p className={styles.workBreak}>......</p>
          <img src={mineMacbook} alt="macbook" className={styles.mineMacbook} />
          <img src={mineIphone} alt="iphone" className={styles.mineIphone} />
          <h1 className={styles.workTitle}>Minesweeper</h1>
          <p className={styles.workText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            inventore ratione, ad cum molestias odit magnam placeat dolore
            dignissimos ullam optio repudiandae commodi aspernatur, dolores
            sequi aperiam qui velit ut!
          </p>
          <ul className={styles.workSkills}>
            <li>HTML</li>
            <li>Hosting</li>
            <li>Responsive Design</li>
            <li>CSS/SCSS</li>
            <li>GitHub</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Work;
