import React, { useEffect, useRef, useState } from "react";
import "./education.css";
import { FaBriefcase } from "react-icons/fa";

const Education = () => {
  const verticalRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const verticalLine = verticalRef.current;
    const items = itemsRef.current;

    const handleScroll = () => {
      const educationSection = document.getElementById("education");
      const sectionTop = educationSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionTop < screenHeight / 1.5) {
        verticalLine.style.height = "100%";
      }

      items.forEach((item, index) => {
        if (item) {
          let itemTop = item.getBoundingClientRect().top;
          if (itemTop < screenHeight * 0.8) {
            setTimeout(() => {
              item.classList.add("show");
              right.classList.add("show");
            }, index * 400);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [educationData] = useState([
    {
      title: "B.Tech in CSE",
      mark: "",
      place: " Vidya Academy Of Science & Technology Technical Campus",
      date: " 2021 - 2025",
    },
    {
      title: " Senior Secondary (XII), DHSC Kerala",
      mark: " Percentage: 87.10%",
      place: "G H S S Bharathanoor, Trivandrum,Kerala,India",
      date: "2021",
    },
    {
      title: " Secondary (X), KERALA SSLC BOARD",
      mark: " Percentage: 98.89%",
      place: "G V H S S Kadakkal,Kollam,Kerala,India",
      date: "2019",
    },
  ]);
  return (
    <section id="education">
      <h2>
        <FaBriefcase className="icon" />
        Education
      </h2>
      <div className="timeline">
        <div className="vertical" ref={verticalRef}></div>

        {educationData.map((edu, index) => (
          <div
            key={index}
            className={index % 2 === 0 ? "item" : "right"}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className="content">
              <h1>{edu.title}</h1>
              <h3>{edu.place}</h3>
              <p>{edu.date}</p>
              <h6>{edu.mark}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
