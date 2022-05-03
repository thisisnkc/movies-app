import React from "react";
import "./singlecomponent.scss";

function Singlecomponent() {
  return (
    <div className="singlecomponent">
      <div className="left">
        <img src="" alt="movie" />
      </div>
      <div className="right">
        <div className="top">
          <h1>John Wick</h1>
          <h2>Action, Adventure</h2>
        </div>
        <div className="down">
          <img src="assets/imdb.png" alt="imdb" />
          <h2>7.8</h2>
        </div>
      </div>
    </div>
  );
}

export default Singlecomponent;
