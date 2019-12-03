import React, { Component } from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import "./Contact.module.scss";

class Contact extends Component {
  render() {
    return (
      <section>
        <p className="test"></p>
        <HeaderImage />
        <MenuBar />
      </section>
    );
  }
}

export default Contact;
