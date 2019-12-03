import React, { Component } from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import styles from "./Homepage.module.scss";

class Homepage extends Component {
  render() {
    return (
      <section>
        <HeaderImage />
        <MenuBar />
        <div className={styles.homepageBackground}>
          <p className={styles.homepageHeading}>alert("Hello world!")</p>
          <article className={styles.homepageText}>
            I'm Kat Kolomycew — a language graduate and web developer on a
            mission to build applications with clean functional code and elegant
            responsive designs.
            <p>
              I was born in Poland, spend half of my childhood in Scotland, and
              taught English in Spain for a year. Most recently, I devoted three
              months to a tech conversion course at{" "}
              <a
                href="https://www.nology.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                _nology
              </a>{" "}
              in England. Out of all my adventures, it was this last one which
              solidified my ambition for the world — I want to create things
              that work, and then I want to make them beautiful.
            </p>
            <p>
              My journey with computers started 16 years ago, when my superhero
              dad charmed me curious with his coding novels in the Windows XP
              command line. You can read my story on{" "}
              <a
                href="https://www.linkedin.com/pulse/my-nology-superheros-coding-launching-career-tech-kat-kolomycew/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              and find all the work featured here on this portfolio on my{" "}
              <a
                href="https://github.com/katkolomycew?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
            <ul className={styles.technicalSkills}>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>JavaScript</li>
              <li>Unit Testing</li>
              <li>Responsive Design</li>
              <li>JSX</li>
              <li>Firebase</li>
              <li>Google Cloud Platform</li>
              <li>SCRUM</li>
              <li>iOS</li>
              <li>Adobe Photoshop</li>
              <li>Agile</li>
              <li>Authorisation</li>
              <li>Authentication</li>
              <li>NoSQL</li>
              <li>Microsoft Office</li>
              <li>GitHub</li>
              <li>Windows</li>
              <li>Hosting</li>
              <li>React</li>
              <p>// Technical Skills & Interests</p>
            </ul>
            <p className={styles.homepageBreak}>......</p>
            <ul className={styles.personalSkills}>
              <p className={styles.personalTitle}>
                // Personal Skills & Interests
              </p>
              <li>Polish</li>
              <li>English</li>
              <li>Spanish</li>
              <li>Drawing</li>
              <li>Vinyls</li>
              <li>Blog/creative writing</li>
              <li>Arcades</li>
              <li>Psychology</li>
              <li>DIY models</li>
              <li>80s Music</li>
              <li>Classic cinema</li>
              <li>Baking (awesome brownie recipe)</li>
              <li>Travel</li>
              <li>Long hikes</li>
              <li>Horseriding</li>
              <li>Mindfulness</li>
              <li>Emotional intelligence</li>
              <li>Artificial intelligence</li>
              <li>History</li>
              <li>Sudoku/jigsaw puzzles/crosswords</li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Homepage;
