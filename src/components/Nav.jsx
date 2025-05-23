import React, { useState, useEffect } from "react";
import "./nav.css";
import Logo from "../assets/software-engineer-icon.svg";
import { Link } from "react-scroll";
import InstallLogo from "../assets/icons/download-icon.png";
import CloseLogo from "../assets/icons/close.svg";

export default function Nav({ deferredPrompt, isInstall, closeBar, isNavOpen }) {
  useEffect(() => {
    if (deferredPrompt) {
      console.log("install prompt available");
    }
  }, [deferredPrompt]);

  const installApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
          console.log("App Installed");
        } else {
          console.log("Installation Dismissed");
        }
      });
    }
  };

  return (
    <div>
      
      <section id="nav" className = {isNavOpen ? "show" : ""}>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
        <ul>
          <li className="cls"><button className="Closeside" onClick={closeBar} ><img src={CloseLogo} alt="" /></button></li>
          {isInstall && (
            <li>
              <button onClick={installApp} className="btn">
                <img src={InstallLogo} alt="Install App" />
              </button>
            </li>
          )}
          <li>
            <Link to="spotlight" spy={true} activeClass='active' smooth={true} duration={500} className="btns">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} activeClass='active' smooth={true} duration={300} className="btns">
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} activeClass='active' smooth={true} duration={300} className="btns">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="education" spy={true} activeClass='active' smooth={true} duration={500} className="btns">
              Education
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} activeClass='active' smooth={true} duration={500} className="btns">
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} activeClass='active' smooth={true} duration={500} className="btns">
              Contact
            </Link>
          </li>
        </ul>
      </section>
      <div id="overlay" onClick={closeBar}>
        
      </div>
     
    </div>
  );
}
