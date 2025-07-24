import React, { useState, useEffect } from "react";
import "./skill.css";
import Lhtml from "../assets/skills/html-icon.png";
import Lcss from "../assets/skills/css-icon.png";
import Lbootstrap from "../assets/skills/bootstrap-icon.png";
import Ljs from "../assets/skills/javascript-icon.png";
import Lc from "../assets/skills/c-program-icon.png";
import Lsass from "../assets/skills/sass-icon.png";
import Lgitlab from "../assets/skills/gitlab-icon.png";
import Lreact from "../assets/skills/react-js-icon.png";
import Ltailwind from "../assets/skills/tailwind-css-icon.png";
import Lgithub from "../assets/skills/github-icon.png";
import Lpython from "../assets/skills/python-icon.png";
import Ldjango from "../assets/skills/django-icon.png";
import Lmongodb from "../assets/skills/mongodb-icon.png";
import Lpostgresql from "../assets/skills/postgresql-icon.png";
import Lpostman from "../assets/skills/postman-icon.png";

export default function Skills() {
  const [skills, setSkills] = useState([
    { id: "1", title: "HTML", description: "Hypertext Markup Language." },
    { id: "2", title: "CSS", description: "Cascading Style Sheets." },
    {
      id: "3",
      title: "Bootstrap",
      description: "A popular CSS framework for building responsive designs.",
    },
    {
      id: "4",
      title: "JavaScript",
      description: "Programming language for the web.",
    },
    {
      id: "5",
      title: "C Programming",
      description:
        "A powerful programming language used in system development.",
    },

    {
      id: "6",
      title: "Sass",
      description: "A CSS preprocessor that makes styling easier.",
    },

    {
      id: "7",
      title: "GitHub",
      description: "A platform for version control and collaboration.",
    },
    {
      id: "8",
      title: "React",
      description: "A JavaScript library for UI development.",
    },
    {
      id: "9",
      title: "GitLab",
      description:
        "A DevOps platform for managing repositories and CI/CD pipelines.",
    },
    {
      id: "10",
      title: "Tailwind",
      description: "A utility-first CSS framework for rapid UI development.",
    },
    {
      id: "11",
      title: "Django",
      description:
        "A high-level Python web framework for rapid, secure, and scalable development.",
    },
    {
      id: "12",
      title: "Python",
      description:
        "A versatile, high-level programming language known for its readability and simplicity.",
    },
    {
      id: "13",
      title: "MongoDB",
      description:
        "A popular NoSQL database that stores data in flexible, JSON-like documents.",
    },
    {
      id: "14",
      title: "PostgreSQL",
      description:
        "A powerful, open-source object-relational database system known for reliability.",
    },
    {
      id: "15",
      title: "Postman",
      description:
        "An API platform for developers to design, build, test, and iterate on their APIs.",
    },
  ]);
  const defaultSkill = {
    title: "Skills",
    description: "Technologies I have knowledge of and     work with.",
  };
  const [selectedSkill, setSelectedSkill] = useState(defaultSkill);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const handleClick = (id) => {
    const skill = skills.find((skill) => skill.id === id.toString());
    if (skill) {
      setSelectedSkill(skill);
      setDisplayedText("");
      setIndex(0);
      setTypingDone(false);
    }
  };

  useEffect(() => {
    if (selectedSkill && index < selectedSkill.description.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + selectedSkill.description[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setTypingDone(true);
    }
  }, [index, selectedSkill]);

  useEffect(() => {
    if (selectedSkill !== defaultSkill && typingDone) {
      const resetTimer = setTimeout(() => {
        setSelectedSkill(defaultSkill);
        setDisplayedText(defaultSkill.description);
        setIndex(defaultSkill.description.length);
      }, 5000);

      return () => clearTimeout(resetTimer);
    }
  }, [selectedSkill, typingDone]);

  return (
    <section id="skills">
      <div className="bottom">
        <div className="screen">
          <div className="screen1">
            <h1>{selectedSkill.title}</h1>
            <p>{displayedText}</p>
          </div>
        </div>
      </div>

      <div className="top">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className={`box box${skill.id}`}
            onMouseEnter={() => handleClick(skill.id)}
          >
            <img
              src={
                skill.title === "HTML"
                  ? Lhtml
                  : skill.title === "CSS"
                  ? Lcss
                  : skill.title === "Bootstrap"
                  ? Lbootstrap
                  : skill.title === "JavaScript"
                  ? Ljs
                  : skill.title === "React"
                  ? Lreact
                  : skill.title === "Sass"
                  ? Lsass
                  : skill.title === "GitHub"
                  ? Lgithub
                  : skill.title === "GitLab"
                  ? Lgitlab
                  : skill.title === "C Programming"
                  ? Lc
                  : skill.title === "Python"
                  ? Lpython
                  : skill.title === "Django"
                  ? Ldjango
                  : skill.title === "MongoDB"
                  ? Lmongodb
                  : skill.title === "PostgreSQL"
                  ? Lpostgresql
                  : skill.title === "Postman"
                  ? Lpostman
                  : Ltailwind
              }
              alt={skill.title}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
