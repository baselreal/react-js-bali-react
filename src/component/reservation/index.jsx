import React from "react";
import "./reservation.css";
import { Link } from "react-router-dom";
import Back from "./Back.png";

const Reservation = () => {
  return (
    <body className="reser-bg">
      <div className="container-reser"></div>
      <div className="form">
        <form className="form1">
          <div className="second back2">
            <Link to="/">
              <img src={Back} alt="" />
            </Link>
          </div>
          <div className="second reser-title">Reservations</div>
          <div className="container">
            <input className="second name" type="name" name="username" placeholder="Input Your Name" />
            <input className="second email" type="email" name="mail" placeholder="Input Your Email" />
            <div className="second wrap-second">
              <input className="tel" type="tel" name="phone" placeholder="Input your phone" />
              <input className="select" type="select" name="" placeholder="Select your nationality" />
            </div>
            <textarea className="second textarea" name="trip" id="" cols="30" rows="10" placeholder="Explain about your trip"></textarea>
            <div className="second submit">
              <div className="submit-p">submit</div>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Reservation;
