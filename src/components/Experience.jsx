import React from "react";
import "./experience.css"; // Import the CSS for styling

// Experience data can be stored in an array of objects for easier management
const experiences = [
  {
    role: "Full Stack Python Developer Intern",
    company: "Srishti, Trivandrum",
    date: "June 2025 – Present",
    description: [
      "Learning and applying full-stack Python development (Django) under industry mentorship.",
      "Collaborating on live projects involving database design, API integration, and frontend-backend synchronization.",
    ],
  },
  {
    role: "Java Full Stack Developer Intern",
    company: "White Track Technologies, Trivandrum",
    date: "July 2024",
    description: [
      "Completed an intensive 5-day Java Full Stack internship focused on front-end and back-end workflows.",
      "Built responsive interfaces using HTML, CSS, Bootstrap, and JavaScript.",
      "Developed dynamic frontend components integrated with Java backend logic.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    date: "February 2023 – Present",
    description: [
      "Delivered custom web solutions, including for e-commerce clients, using React and Django.",
      "Handled complete project lifecycle: requirement gathering, development, testing, and deployment.",
      "Built projects featuring real-time data, user authentication, and media handling.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <h4>
              {exp.company} | <span>{exp.date}</span>
            </h4>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}