import React from "react";
import Bali from "../home/bali.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg">
      <div className="bg-color"></div>\
      <div className="wrap-text">
        <div className="img">
          <img src={Bali} alt="" />
        </div>
        <div className="kata">
          <div className="better">A Better Way To</div>
          <div className="travel">Travel To Bali</div>
        </div>
        <div className="cheap">Cheapest and Easier</div>
        <div className="button1">
          <Link to="/about" className="about">
            About Us
          </Link>
          <Link to="/reservation" className="reser">
            Reservation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
