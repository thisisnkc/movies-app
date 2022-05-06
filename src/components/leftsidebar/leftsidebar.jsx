import React, { useState } from "react";
import "./leftsidebar.scss";
import Menu from "./menu/menu";
import General from "./general/general";
import Social from "./social/social";

function LeftSidebar() {

  const [active , setActive] = useState(false)

  return (
    <div className="leftsidebar">
      <div className="left">
        <img src="assets/logo.png" alt="logo"></img>
        <span>Thisisnkc</span>
      </div>

      <Menu Active={active} setactive={setActive}/>
      <Social Active={active} setactive={setActive}/>
      <General Active={active} setactive={setActive}/>
    </div>
  );
}

export default LeftSidebar;
