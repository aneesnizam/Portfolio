import React, { useState, useEffect } from "react";
import Iconss from "../assets/icons/male-icon.png";
import { Link } from "react-scroll";

export default function Icon() {
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 300) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    backgroundColor: "	#e6d7ff",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: isHidden ? "none" : "flex",
    justifyContent: "center",
    padding: "10px",
    position: "fixed",
    alignItems: "center",
    cursor: "pointer",
    zIndex: "3",
    left: "2%",
    bottom: "5%",
  
  };

  const logoStyle = {
    width: "100%",
    display: "block",
    height: "auto",
  };

  return (
    <>
      {!isHidden && (
        <Link to="contact" smooth={true} duration={800}>
          <div className="contact-icon" style={container}>
            <img src={Iconss} alt="Contact Icon" style={logoStyle} />
          </div>
        </Link>
      )}
    </>
  );
}
