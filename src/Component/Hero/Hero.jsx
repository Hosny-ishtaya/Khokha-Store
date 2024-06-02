import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/he-.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2> NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Create Your</p>
            <img src={hand_icon} alt="Hand Icon"></img>
          </div>
          <p>Own Fashion</p>
          <p>Style</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon"></img>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero"></img>
      </div>
    </div>
  );
};

export default Hero;
