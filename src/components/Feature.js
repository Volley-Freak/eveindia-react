import React from "react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import "./feature.css";

function Feature() {
  return (
    <div className="features-container container">
      <div className="heading">FEATURES</div>
      <ul className="features">
        <li className="feature">
          <img src={feature1} alt="feature" /> Top Speed
        </li>
        <li className="feature">
          <img src={feature2} alt="feature" />
          Top Speed
        </li>
        <li className="feature">
          <img src={feature3} alt="feature" />
          Top Speed
        </li>
        <li className="feature">
          <img src={feature4} alt="feature" />
          Top Speed
        </li>
      </ul>
    </div>
  );
}

export default Feature;
