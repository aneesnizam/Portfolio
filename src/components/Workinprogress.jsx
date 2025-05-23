import React from "react";
import "./Workinprogress.css";
import { useNavigate } from "react-router-dom";
import One from "../assets/images/1.png";
export default function Workinprogress() {
  const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  const feat = () => {
    alert("This feature is coming soon.");
    alert("This feature is not yet implemented.");
  };
  return (
    <div class="wip">
      <img src={One} alt="" />
      <h1>404</h1>
      <p>
        Oops! This project is currently under maintenance. Please check back
        later.
      </p>
      <button onClick={handleBack}>Go back to homepage</button>
    </div>
  );
}
