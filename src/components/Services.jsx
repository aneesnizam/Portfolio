import React from "react";
import "./services.css"; // The stylesheet for this component

// Import icons for each service from the 'react-icons' library
import { FaReact, FaCode, FaServer, FaBriefcase } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { MdAppSettingsAlt } from "react-icons/md";

// An array of objects to hold your service data
const servicesData = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Crafting visually stunning, responsive websites optimized for performance and user experience using modern front-end technologies.",
  },
  {
    icon: <FaReact />,
    title: "Frontend Development",
    description: "Creating interactive and user-friendly interfaces with React, focusing on component-based architecture and state management.",
  },
  {
    icon: <SiDjango />,
    title: "Backend Development",
    description: "Building scalable and secure server-side logic and database interactions using the Django framework and PostgreSQL.",
  },
  {
    icon: <MdAppSettingsAlt />,
    title: "Custom Web Applications",
    description: "Building tailored web applications with robust Django backends and dynamic React frontends to meet your specific business needs.",
  },
  {
    icon: <FaServer />,
    title: "API Development",
    description: "Designing and developing efficient RESTful APIs to ensure seamless integration between different systems and applications.",
  },
  {
    icon: <FaBriefcase />,
    title: "Freelancing",
    description: "Providing end-to-end web solutions for diverse clients, from concept and design to development and deployment.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <h2>What I Do</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}