import React from "react";
import "./contact.css";
import Avatar from "../assets/images/programmer-icon.png";
import Github from "../assets/icons/github-icon.png";
import linkedin from "../assets/icons/linkedin-icon.png";
import mail from "../assets/icons/mail-icon.png";
import x from "../assets/icons/x-icon.png";
export default function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="content">
          <span className="logo">
            <img src={Avatar} alt="" />
          </span>
          <h1>Let's talk With Me!</h1>
          <p>Feel free to reach out.</p>
          <div className="item">
            <span className="icons">
              <a href="https://github.com/aneesnizam">
                <img src={Github} title="Github" alt="Github" />
              </a>
            </span>
            <span className="icons">
              <a href="mailto:aneesnizam222a@gmail.com?subject=Inquiry&body=Hello, I would like to ask...">
                <img src={mail} title="Mail" alt="mail" />
              </a>
            </span>
            <span className="icons">
              <a href="https://www.linkedin.com/in/anees-nizam/">
                <img src={linkedin} title="Linkedin" alt="linkedin" />
              </a>
            </span>
            <span className="icons">
              <a href="">
                <img src={x} title="Twitter" alt="twitter" />
              </a>
            </span>
          </div>
        </div>
        <div className="bottom">
          <h6>copyright &copy; 2025 Web Design All rights reserved</h6>
        </div>
      </section>
    </div>
  );
}
