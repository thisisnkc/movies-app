import React from "react";
import "./popular.scss";
import Singlecomponent from "../singlecomponent/singlecomponent";

function Popular() {
  return (
    <div className="popular">
      <h1>Popular Movies</h1>
      <Singlecomponent />
      <button className="btn">See More</button>
    </div>
  );
}

export default Popular;
