import React from "react";
import "./About.css"; // We will add styles here
import Dp from "../assets/images/me2.jpeg";

// Step 1: Import the icons for your main skills
import { FaReact, FaGithub  } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <section id="about">
       
      <div className="me">
        <h3>Hello, I'm</h3>
        <h1>Anees</h1>
        <h2>Full-Stack Developer</h2>
        <p className="about-text">
          A Full-Stack Developer specializing in creating seamless web
          experiences. I bring ideas to life with modern technologies, building
          dynamic UIs with <strong>React</strong> and{" "}
          <strong>Tailwind CSS</strong>, powered by robust{" "}
          <strong>Django</strong> backends and <strong>PostgreSQL</strong>{" "}
          databases. I thrive on transforming complex problems into elegant,
          user-friendly solutions.
        </p>

        {/* This new section displays your skills */}
        <div className="main-skills">
          <div className="skill-icon" title="React">
            <FaReact />
          </div>
          <div className="skill-icon" title="Tailwind CSS">
            <SiTailwindcss />
          </div>
          <div className="skill-icon" title="Django">
            <SiDjango />
          </div>
          <div className="skill-icon" title="PostgreSQL">
            <SiPostgresql />
          </div>
          <div className="skill-icon" title="Git">
            <FaGithub  />
          </div>
        </div>

        <button onClick={() => window.open("/work.pdf", "_blank")}>
          View Resume
        </button>
      </div>

      <div className="photo">
        <img src={Dp} alt="A picture of me" />
      </div>
    </section>
  );
}