import React from "react";
import "./leftsidebar.scss";
import Menu from "./menu/menu";
import General from "./general/general";
import Social from "./social/social";

function LeftSidebar() {
  return (
    <div className="leftsidebar">
      <div className="left">
        <img src="assets/logo.png" alt="logo"></img>
        <span>Thisisnkc</span>
      </div>

      <Menu />
      <Social />
      <General />
    </div>
  );
}

export default LeftSidebar;
