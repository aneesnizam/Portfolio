import React, { useState } from "react";
import "./portfolio.css";
import { useNavigate } from "react-router-dom";

// Import project assets
import Cryptography from "../assets/images/cryptography.png";
import Chain from "../assets/images/supplychain1.png";
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/gameproject.png";
import View from "../assets/icons/next-button-icon.svg";
import Spendwise from "../assets/images/spendwise.png";

// --- DATA ARRAYS ---
const academicProjectsData = [
  {
    id: "acad1",
    image: Cryptography,
    title: "Enhanced Cryptographic Toolbox",
    description:
      "A personalized solution for text-based cryptography for communication using sophisticated ciphers.",
    link: "https://github.com/aneesnizam/encryption",
  },
  {
    id: "acad2",
    image: Chain,
    title: "Pharmaceutical Supply Chain Using Blockchain",
    description:
      "A blockchain-based system to enhance transparency and security in pharmaceutical supply chains, focusing on detecting counterfeit drugs.",
    link: "https://github.com/aneesnizam/Pharmaceutical-Supply-Chain",
  },
];

const personalProjectsData = [
  {
    id: "pers1",
    image: Project1,
    title: "Efficiently Estimate Your Travel Expenses",
    description:
      "A web-based tool that helps users estimate travel expenses by calculating fuel costs based on distance, fuel efficiency, and fuel price.",
    link: "https://letsgoforatrip.netlify.app/",
  },
  {
    id: "pers2",
    image: Project2,
    title: "PLAYZIO",
    description:
      "A web-based mini-games platform featuring a collection of fun and engaging games built with multiple technologies.",
    link: "https://playzio.netlify.app/",
  },
  {
    id: "pers3",
    image: Spendwise,
    title: "SPEND WISE",
    description:
      "A full-featured expense tracking web application designed to help users manage their daily spending efficiently.",
    link: "https://spendwise.deno.dev",
  },
];

export default function Portfolio() {
  const navigate = useNavigate();
  const [content, setContent] = useState("academic");

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const ProjectBox = ({ project }) => (
    <div className="box">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={() => openLink(project.link)}>
        <img src={View} alt="View Project" />
      </button>
    </div>
  );

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="top">
        <div
          onClick={() => setContent("academic")}
          className={`hov ${content === "personal" ? "active1" : ""}`}
        >
          <ul>
            <li>Academic Projects</li>
          </ul>
        </div>
        <div
          onClick={() => setContent("personal")}
          className={`hov ${content === "academic" ? "active2" : ""}`}
        >
          <ul>
            <li>Personal Projects</li>
          </ul>
        </div>
      </div>

      <div className="portfolio-content-wrapper">
        <div className="bottom">
          {content === "academic"
            ? academicProjectsData.map((project) => (
                <ProjectBox key={project.id} project={project} />
              ))
            : personalProjectsData.map((project) => (
                <ProjectBox key={project.id} project={project} />
              ))}
        </div>

        <div className="view-more-container">
          <p className="view-more" onClick={() => navigate("/viewmore")}>
            View More <span className="icon">→</span>
          </p>
        </div>
      </div>
    </section>
  );
}
