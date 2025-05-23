import React, { useState, useEffect } from "react";
import Lhtml from "../assets/images/html icon.webp";
import Lcss from "../assets/images/css icon.webp";
import Ljs from "../assets/images/js icon.png";
import Lreact from "../assets/images/react icon.png";
import Lpython from "../assets/images/python icon.webp";
import "./spotlight.css";


export default function spotlight({ openBar }) {
  const defaultText = "hello";
  const [text, setText] = useState(defaultText);
  const [displayedText, setdisplayedText] = useState("");
  const [index, setindex] = useState(0);

  const handleclick = (newText) => {
    setText(newText);
    setdisplayedText("");
    setindex(0);
  };
  useEffect(() => {
    if (index < text.length) {
      const Timer = setTimeout(() => {
        setdisplayedText((prev) => prev + text[index]);
        setindex(index + 1);
      }, 100);
      return () => clearTimeout(Timer);
    }
  }, [index, text]);
  useEffect(() => {
    if (text !== defaultText) {
      const resetTimer = setTimeout(() => {
        setText(defaultText);
        setdisplayedText("");
        setindex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [text, defaultText]);
  return (
    <div>
      <section id="spotlight">

        <div className="top">
          <h1>Anees N</h1>
          <h3>Coding through a different lens.</h3>
        </div>
        <div className="bottom">
          <div className="boxes">
            <span className="box box1" onMouseEnter={() => handleclick("Html")}>
              <img src={Lhtml} alt="" />
            </span>
            <span className="box box2" onMouseEnter={() => handleclick("CSS")}>
              <img src={Lcss} alt="" />
            </span>
            <span
              className="box box4"
              onMouseEnter={() => handleclick("React")}
            >
              <img src={Lreact} alt="" />
            </span>
            <span
              className="box box3"
              onMouseEnter={() => handleclick("Python")}
            >
              <img src={Lpython} alt="" />
            </span>
            <span className="box box5" onMouseEnter={() => handleclick("JS")}>
              <img src={Ljs} alt="" />
            </span>
          </div>
          <h1 className="monitor">{displayedText}</h1>
        </div>
      </section>
    </div>
  );
}
