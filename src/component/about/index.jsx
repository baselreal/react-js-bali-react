import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import Back from "./Back.png";

const About = () => {
  return (
    <div className="containerContent">
      <div className="bgColor"></div>
      <div className="first wrapAll">
        <div className="first buttonBack">
          <Link to="/">
            <img src={Back} alt="back" />
          </Link>
        </div>
        <div className="first contentTitle">About Us</div>
        <div className="first content">
          More than 10 years, Arkademy Travel Services has grow at a steady pace and become one of Indonesia's leading travel agent offering a complete travel solution for both leisure and business travels. The company has over 500 staff
          within 24 branches across the country
        </div>
      </div>
    </div>
  );
};

export default About;
