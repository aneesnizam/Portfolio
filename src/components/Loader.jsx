import React from "react";
import "./Loader.css";

export default function Loader({ loading }) {
  return (
    loading && (
      <div className="loader-wrapper fade-out">
        <div className="container-loader">
          <div className="load-box"></div>
          <div className="load-box"></div>
          <div className="load-box"></div>
          <div className="load-box"></div>
          <div className="load-box"></div>
        </div>
      </div>
    )
  );
}
