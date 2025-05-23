import React from "react";
import "./About.css";
import resumeIcon from '../assets/icons/info-icon.png'
import Dp from "../assets/images/me.png"
export default function About() {
  return (
    <section id="about">
      <div className="me">
        <h3>Hello,</h3>
        <h1>I'm Anees</h1>
        <h2>Software Developer</h2>
        <p>
          I am a passionate Computer Science graduate with a strong foundation
          in programming principles and software development. Hands-on
          experience through academic projects. Quick learner, adept at
          acquiring new technologies and applying problem-solving skills. Eager
          to contribute to innovative projects and grow professionally in a
          collaborative environment.
        </p>
        <button onClick={() => window.open("/work.pdf", "_blank")}>
          View Resume
        </button>
      </div>
      <div className="photo">
        <img src={Dp} alt="" />
      </div>
    </section>
  );
}
