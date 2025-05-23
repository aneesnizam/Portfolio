import React, { useState } from "react";
import "./portfolio.css";
import Project from "../assets/images/project.webp";
import Cryptography from "../assets/images/cryptography.png";
import Chain from "../assets/images/supplychain1.png";
import { useNavigate } from "react-router-dom";
import Project1 from "../assets/images/project1.png";
import View from "../assets/icons/next-button-icon.svg";

export default function Portfolio() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/wip");
  };
  const handleproject1 = () => {
    window.location.href = "https://letsgoforatrip.netlify.app/";
  };
  const handleAcademic1 = () => {
    window.location.href = "https://github.com/aneesnizam/encryption";
  };
    const handleAcademic2 = () => {
    window.location.href = "https://github.com/aneesnizam/Pharmaceutical-Supply-Chain";
  };
  const [content, setContent] = useState("content1");
  const data = () => {
    if (content === "content1") {
      return (
        <>
          <div className="box">
            <img src={Cryptography} alt="" />
            <h3> Enhanced Cryptographic Toolbox</h3>
            <p>
              A personalized solution for text-based cryptography for
              communication using sophisticated ciphers
            </p>
            <button onClick={handleAcademic1}>
              <img src={View} alt="" />
            </button>
          </div>
          <div className="box">
            <img src={Chain} alt="" />
            <h3>Pharmaceutical Supply Chain Using Blockchain</h3>
            <p>
              This project aims to developed a blockchain-based system to
              enhance transparency and security in pharmaceutical supply chains,
              focusing on detecting counterfeit drugs.
            </p>
            <button onClick={handleAcademic2}>
              <img src={View} alt="" />
            </button>
          </div>
        </>
      );
    } else if (content === "content2") {
      return (
        <>
          <div className="box">
            <img src={Project1} alt="" />
            <h3>Efficiently Estimate Your Travel Expenses</h3>
            <p>
              The Fuel Cost Calculator is a web-based tool that helps users
              estimate their travel expenses by calculating fuel costs based on
              distance, fuel efficiency, and fuel price.
            </p>
            <button onClick={handleproject1}>
              <img src={View} alt="" />
            </button>
          </div>
          <div className="box">
            <img src={Project} alt="" />
            <h3>Project 2</h3>
            <p>
              Developed a full-stack web application using modern technologies,
              focusing on performance, scalability, and user-friendly design.
            </p>
            <button onClick={handleClick}>
              <img src={View} alt="" />
            </button>
          </div>
          <div className="box">
            <img src={Project} alt="" />
            <h3>Project 3</h3>
            <p>
              Developed a full-stack web application using modern technologies,
              focusing on performance, scalability, and user-friendly design.
            </p>
            <button onClick={handleClick}>
              <img src={View} alt="" />
            </button>
          </div>
        </>
      );
    }
  };
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="top">
        <div
          onClick={() => setContent("content1")}
          className={`hov ${content === "content2" ? "active1" : ""}`}
        >
          <ul>
            <li>Academic Projects</li>
          </ul>
        </div>
        <div
          onClick={() => setContent("content2")}
          className={`hov ${content === "content1" ? "active2" : ""}`}
        >
          <ul>
            <li>Personal Projects</li>
          </ul>
        </div>
      </div>
      <div className="bottom">{data()}</div>
    </section>
  );
}
