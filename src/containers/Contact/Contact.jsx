import React, { Component } from "react";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import MenuBar from "../../components/MenuBar/MenuBar";
import styles from "./Contact.module.scss";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm = event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };

  render() {
    const { status } = this.state;
    return (
      <section>
        <HeaderImage />
        <MenuBar />
        <div className={styles.contactBackground}>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mwkpqqak"
            method="POST"
            className={styles.contactForm}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.formName}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.formEmail}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={styles.formSubject}
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Message"
              className={styles.formMessage}
              required
            ></textarea>
            {status === "SUCCESS" ? (
              <button>Thanks!</button>
            ) : (
              <button>Send</button>
            )}
            {status === "ERROR" && <button>Ooops! There was an error.</button>}
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
