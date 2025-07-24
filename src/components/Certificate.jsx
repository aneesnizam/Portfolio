import React, { useState } from "react";
import "./certificate.css";
import Certificate1 from "../assets/certificate/docker.png";
import Certificate2 from "../assets/certificate/Udemy.jpg";
import Certificate3 from "../assets/certificate/Workshop.jpg";
import Certificate5 from "../assets/certificate/UI.png";
import Certificate4 from "../assets/certificate/React.png";
import microsoft from "../assets/certificate/microsoft.png";
import logo1 from "../assets/icons/certificate-icon.png";

export default function Certificate() {
  const [hovered, setHovered] = useState(null);
  const [certificate, setCertificate] = useState([
    {
      id: 1,
      title: "Docker Foundations",
      image: Certificate1,
    },
    {
      id: 2,
      title: "HTML AND CSS",
      image: Certificate2,
    },
    {
      id: 3,
      title: "Al AS A TOOL TO ENHANCE PRODUCTIVITY WORKSHOP",
      image: Certificate3,
    },
    {
      id: 4,
      title: "REACT",
      image: Certificate4,
    },
    {
      id: 5,
      title: "UI ENGINEER",
      image: Certificate5,
    },
    {
      id: 6,
      title: "Career Essentials in Generative AI",
      image: microsoft,
    },
  ]);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  return (
    <section id="certificate">
      <div className="heading">
        {" "}
        <img src={logo1} alt="" /> <h1> Certificate</h1>
      </div>
      <div className="bottom">
        <ul>
          {certificate.map((cert) => (
            <li
              key={cert.id}
              onMouseEnter={() => handleMouseEnter(cert.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {cert.title.toUpperCase()}
            </li>
          ))}
          <div className="boxx1">
            {hovered && (
              <div className="boxx">
                <img
                  className="certificate"
                  src={certificate.find((cert) => cert.id === hovered).image}
                  alt={certificate.find((cert) => cert.id === hovered).title}
                />
              </div>
            )}
          </div>
        </ul>
        <div className="box-out">
          {" "}
          {hovered && (
            <div className="boxx">
              <img
                className="certificate"
                src={certificate.find((cert) => cert.id === hovered).image}
                alt={certificate.find((cert) => cert.id === hovered).title}
                style={hovered === 5 ? { width: "70%" } : {}}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
