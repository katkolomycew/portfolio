import React, { Component } from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import styles from "./Homepage.module.scss";

class Homepage extends Component {
  render() {
    return (
      <section>
        <div className={styles.homepageBackground}>
          <p className={styles.homepageHeading}>alert("Hello world!")</p>
          <article className={styles.homepageText}>
            I'm Kat Kolomycew — a language graduate and web developer on a
            mission to build applications with clean functional code and eleant
            responsive designs.
            <p>
              I was born in Poland, spend half of my childhood in Scotland, and
              taught English in Spain for a year. Most recently, I devoted three
              months to a tech conversion course at{" "}
              <a href="https://www.nology.io/">_nology</a> in England. Out of
              all my adventures, it was this last one which solidified my
              ambition for the world — I want to create things that work, and
              then I want to make them beautiful.
            </p>
            <p>
              My journey with computers started 16 years ago, when my superhero
              dad charmed me curious with his coding novels in the Windows XP
              command line. You can read my story on{" "}
              <a href="https://www.linkedin.com/pulse/my-nology-superheros-coding-launching-career-tech-kat-kolomycew/">
                LinkedIn
              </a>{" "}
              and find the work featured on this portfolio on my{" "}
              <a href="https://github.com/katkolomycew?tab=repositories">
                GitHub
              </a>
              .
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>JavaScript</li>
              <li>Unit Testing</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Firebase</li>
              <li>Google Cloud Platform</li>
              <li>SCRUM</li>
              <li>iOS</li>
              <li>Adobe Photoshop</li>
              <li>Agile</li>
              <li>Auth</li>
              <li>GitHub</li>
              <li>REST</li>
              <li>Microsoft Office</li>
              <li>NoSQL</li>
              <li>Windows</li>
            </ul>
          </article>
        </div>
        <HeaderImage />
        <MenuBar />
      </section>
    );
  }
}

export default Homepage;
