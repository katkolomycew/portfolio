import React, { Component } from "react";
import incollabMacbook from "./images/incollabMacbook.png";
import incollabIphone from "./images/incollabIphone.png";
import tugMacbook from "./images/tugMacbook.png";
import tugIphone from "./images/tugIphone.png";
import mealMacbook from "./images/mealMacbook.png";
import mealIphone from "./images/mealIphone.png";
import mineMacbook from "./images/mineMacbook.png";
import mineIphone from "./images/mineIphone.png";
import reference from "./images/reference.jpg";
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
          <a
            href="https://incollaboration.nology.io/login"
            className={styles.workTitle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={styles.workTitle}>In Collaboration</h1>{" "}
          </a>
          <p className={styles.workText}>
            A mobile-first web application designed to facilitate communication
            and collaboration between start-ups. The project was completed in
            four weeks, in a group of nine developers, based around Scrum
            practices and with a focus on pair programming.
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
          <a
            href="https://github.com/katkolomycew/tugofwar"
            className={styles.workTitle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={styles.workTitle}>Tug of War</h1>
          </a>
          <p className={styles.workText}>
            Three-hour challenge to build a functional game with vanilla HTML,
            CSS, and JavaScript all written in one file.
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
          <a
            href="https://github.com/katkolomycew/weekly-mealplans"
            className={styles.workTitle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={styles.workTitle}>Weekly Mealplans</h1>
          </a>
          <p className={styles.workText}>
            A personal project built with a passion for food, and with the
            intention of simplifying the organisation of meal planning and
            updating it weekly.
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
          <a
            href="https://github.com/katkolomycew/tech-challenge"
            className={styles.workTitle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className={styles.workTitle}>Minesweeper</h1>
          </a>
          <p className={styles.workText}>
            My favourite challenge — a fully functional game extended in
            personal time from a brief set to create a minewsweeper board.
          </p>
          <ul className={styles.workSkills}>
            <li>HTML</li>
            <li>Hosting</li>
            <li>Responsive Design</li>
            <li>CSS/SCSS</li>
            <li>GitHub</li>
            <li>JavaScript</li>
          </ul>
          <p className={styles.workBreak}>......</p>
          <blockquote className={styles.workReferences}>
            <span>“</span>
            Kat’s attention to detail has been amazing throughout [our] project
            and the determination she shows even more so. Whether working on
            function, visual or layout Kat shows the same level of passion and
            determination in all her work. Kat always has an opinion and a
            solution on the best ideas for layout and design as well as ways to
            solve any issues, however Kat has shown a great balance of taking on
            board client thoughts and sharing her own opinion to the point that
            I have frequently asked Kat for her opinion before providing one of
            my own. I have enjoyed working with Kat and would be honoured to
            work with her in the future. I highly recommend Kat to any employer
            and believe her to be a fantastic addition to any team.
            <span>”</span>
          </blockquote>
          <img
            src={reference}
            alt="Samantha Miles"
            className={styles.workReferee}
          />
          <h2 className={styles.workName}>Samantha Miles</h2>
          <a
            href="https://www.incollaboration.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles.workRefereeTitle}>
              Co-founder of In Collaboration
            </p>
          </a>
        </div>
      </section>
    );
  }
}

export default Work;
