import React from "react";
import "./best.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Singlecompb from "./singlecompb/singlecompb";

function Best() {
  return (
    <div className="best">
      <div className="heading">
        <h1>Best Artists</h1>
        <div className="icons">
          <div className="icon1">
            <IoIosArrowBack className="i"/>
          </div>
          <div className="icon2">
            <IoIosArrowForward className="i"/>
          </div>
        </div>
      </div>
      <div className="singlecompb">
      <Singlecompb />
      <Singlecompb />
      <Singlecompb />
      <Singlecompb />
      </div>

    </div>
  );
}

export default Best;
