import React from "react";
import "./singlecompb.scss";

function Singlecompb() {
  return (
    <div className="singlecomp">
      <img src="assets/kr.jpg" alt="" />
      <div className="info">
        <button className="btnp">+</button>
        <div className="rating">
          <h2>Keanu Reeves</h2>
          <h3>+27 Movies</h3>
          <img src="assets/rating.png" alt="rating" />
        </div>
      </div>
    </div>
  );
}

export default Singlecompb;
