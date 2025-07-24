import React from "react";
import "./ViewMore.css";

// Navigation and Icon imports
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

// Import all your project images
import Cryptography from "../../assets/images/cryptography.png";
import Chain from "../../assets/images/supplychain1.png";
import Spendwise from "../../assets/images/spendwise.png";
import todomaster from "../../assets/images/todomaster.png";
import npmLoader from "../../assets/images/npmLoader.png";
import Project2 from "../../assets/images/gameproject.png";
import TaskManagerImage from "../../assets/images/project1.png";
import TurfBookingApp from "../../assets/images/goturfy.png";

// --- DATA ARRAYS ---
const academicProjects = [
  {
    id: "acad1",
    image: Chain,
    title: "Pharmaceutical Supply Chain Using Blockchain",
    description:
      "Designed a blockchain-based system to enhance traceability and prevent counterfeit drugs in pharmaceutical supply chains by verifying transactions securely.",
    tech: ["Node.js", "MySQL", "Ethereum"],
    githubLink: "https://github.com/aneesnizam/Pharmaceutical-Supply-Chain",
  },
  {
    id: "acad2",
    image: Cryptography,
    title: "Enhanced Cryptographic Toolbox",
    description:
      "Created a set of custom encryption algorithms to ensure secure text-based communication, enhancing message confidentiality against cryptographic attacks.",
    tech: ["HTML", "CSS", "JavaScript", "Django"],
    githubLink: "https://github.com/aneesnizam/encryption",
  },
];

const personalProjects = [
  {
    id: "pers1",
    image: Spendwise,
    title: "Spend Wise - Expense Tracker",
    description:
      "Developed a feature-rich expense tracker with split payments, summaries, and real-time graphs to help users manage their daily spending efficiently.",
    tech: ["React", "Sass", "Node.js", "MongoDB"],
    liveLink: "https://spendwise.deno.dev",
    githubLink: "https://github.com/aneesnizam/SpendWise",
  },
    {
    id: "pers2",
    image: TurfBookingApp,
    title: "GoTurfy - Booking App",
    description:
      "A streamlined application for users to discover nearby sports turfs, view real-time slot availability, and book their preferred time slots with ease. Features secure online payments and a personalized user dashboard.",
    tech: ["HTML", "Tailwind CSS", "Django", "SQLite"],
    liveLink: null,
    githubLink: "#",
    status: "Ongoing", // <-- Add this line to mark the project status
  },
];

const packagesData = [
  {
    id: "pkg1",
    image: npmLoader,
    title: "React Cool Loaders",
    description:
      "A lightweight and customizable library of loading screen and spinner components for React, published on the NPM registry for easy use in any project.",
    tech: ["React", "NPM", "JavaScript", "CSS"],
    liveLink: "https://www.npmjs.com/package/loading-screens",
    liveLinkText: "View on NPM",
    githubLink: null,
  },
];

const miniProjects = [
  {
    id: "mini1",
    image: TaskManagerImage,
    title: "Fuel Cost Calculator",
    description:
      "A web-based tool that helps users estimate their travel expenses by calculating fuel costs based on distance, fuel efficiency, and fuel price.",
    tech: ["React"],
    liveLink: "https://letsgoforatrip.netlify.app/",
    githubLink: "https://github.com/aneesnizam/Fuel_cost_calculator",
  },
  {
    id: "mini2",
    image: Project2,
    title: "PLAYZIO - Mini Games Platform",
    description:
      "A web-based platform featuring a collection of fun and engaging mini-games built with multiple web technologies.",
    tech: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://playzio.netlify.app/",
    githubLink: "https://github.com/aneesnizam/Playzio",
  },
  {
    id: "mini3",
    image: todomaster,
    title: "TaskMaster - To-Do List App",
    description:
      "A simple and intuitive to-do list application to help you manage your daily tasks efficiently. Built with modern web technologies.",
    tech: ["HTML", "CSS", "Django", "PostgreSQL"],
    liveLink: "https://todomaster-0c9e.onrender.com/",
    githubLink: "https://github.com/aneesnizam/TodoMaster",
  },
];

// Reusable Project Card Component (No changes here)
// Reusable Project Card Component
const ProjectCard = ({ project }) => (
  <div className="project-entry">
    <div className="project-image">
      <img src={project.image} alt={project.title} />
    </div>
    <div className="project-details">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        {project.tech.map((techItem) => (
          <span key={techItem}>{techItem}</span>
        ))}
      </div>
      <div className="project-links-container">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {project.liveLinkText || "Live Site"}
          </a>
        )}
        {/* --- MODIFIED LOGIC FOR GITHUB LINK --- */}
        {project.status === "Ongoing" ? (
          <a href="#/" className="project-link github disabled">
            Ongoing
          </a>
        ) : project.githubLink != null ? (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github"
          >
            View on GitHub
          </a>
        ) : (
          <a href="#/" className="project-link github disabled">
            Private Repo
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function ViewMore() {
  const navigate = useNavigate();

  // --- 1. CALCULATE TOTAL PROJECTS ---
  const totalProjects =
    academicProjects.length +
    personalProjects.length +
    miniProjects.length +
    packagesData.length;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="view-more-page">
      <button className="back-button" onClick={handleBack} title="Go Back">
        <IoIosArrowBack />
      </button>

      {/* --- 2. ADD THE TOTAL WORKS COUNT ELEMENT --- */}
      <div className="total-works-count">Total Works: {totalProjects}</div>

      <h1>My Work & Projects</h1>

      {/* --- ACADEMIC PROJECTS SECTION --- */}
      <div className="project-category">
        <h2>Academic Projects</h2>
        {academicProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* --- PERSONAL PROJECTS SECTION --- */}
      <div className="project-category">
        <h2>Personal Projects</h2>
        {personalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* --- MINI PROJECTS SECTION --- */}
      <div className="project-category">
        <h2>Mini Projects</h2>
        {miniProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* --- PACKAGES & LIBRARIES SECTION --- */}
      <div className="project-category">
        <h2>Packages & Libraries</h2>
        {packagesData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
