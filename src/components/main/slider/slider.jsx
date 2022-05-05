import React from "react";
import "./slider.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Slider() {
  return (
    <div className="slider">
      <div className="icons">
          <div className="icon1">
            <IoIosArrowBack className="i"/>
          </div>
          <div className="icon2">
            <IoIosArrowForward className="i"/>
          </div>
        </div>
      <img src="assets/deadpoolr.jpeg" alt="Deadpool" />
      <div className="fflex">
        <div className="person">
          <div className="img">
            <img className="img1" src="assets/person1.jpeg" alt=""/>
            <img className="img2" src="assets/person2.jpeg" alt=""/>
            <img className="img3" src="assets/person3.jpeg" alt=""/>
          </div>
          <h3>+5 friends are watching</h3>
        </div>
        <div className="info">
          <h1>DEADPOOL</h1>
          <h3>
            ACTION, ADVENTURE, COMEDY<span>98% Match</span>
          </h3>
          <div className="down">
            <button className="btnw">Watch</button>
            <button className="btnp">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
