import React, { Component } from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import styles from "./Homepage.module.scss";

class Homepage extends Component {
  render() {
    return (
      <>
        <p className={styles.test}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore
          expedita aliquid, ex voluptate dolores vero maxime. Inventore a
          recusandae quasi repellat quam eaque alias. Ipsam tenetur explicabo
          vero possimus!
        </p>
        <HeaderImage />
        <MenuBar />
      </>
    );
  }
}

export default Homepage;
