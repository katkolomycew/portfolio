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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            consequuntur doloribus omnis itaque consectetur, repellat
            voluptatibus officia! Molestias optio nisi aperiam ad, minus
            mollitia amet libero inventore? Soluta, distinctio possimus.
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              reprehenderit doloribus labore facere harum alias quo sit delectus
              dolor ipsam debitis repellendus eum non, dolores perferendis
              aspernatur odio cum beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quos illum reprehenderit voluptatibus nisi perferendis veritatis
              neque nostrum eaque, labore possimus id est autem ducimus facere
              molestias reiciendis sed quae.
            </p>
            <span>(hashtag icons)</span>
          </article>
        </div>
        <HeaderImage />
        <MenuBar />
      </section>
    );
  }
}

export default Homepage;
