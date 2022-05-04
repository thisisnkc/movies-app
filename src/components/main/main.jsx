import React from "react";
import "./main.scss";
import Slider from "./slider/slider";
import Best from "./best/best";
import Continue from "./continue/continue";

function Main() {
  return (
    <div className="main">
      <div className="header">
        <h1>TV Series</h1>
        <h1>Movies</h1>
        <h1>Animes</h1>
      </div>
      <div className="comp">
      <Slider />
      <Best />
      <Continue />
      </div>
    </div>
  );
}

export default Main;
