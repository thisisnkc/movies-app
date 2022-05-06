import React, { useState } from "react";
import "./menu.scss";
import { AiFillHome } from "react-icons/ai";
import { BiStopwatch } from "react-icons/bi";
import { RiCommunityFill, RiCompassDiscoverLine } from "react-icons/ri";

function Menu({ Active, setactive }) {
  const [menuobj, setMenuobj] = useState({
    home: false,
    community: false,
    discovery: false,
    commingSoon: false,
  });

  function handleClickh() {
    setMenuobj({
      home: true,
      community: false,
      discovery: false,
      commingSoon: false,
    });
    console.log(menuobj);
    console.log(menuobj.home);
  }
  function handleClickc() {
    setMenuobj({
      home: false,
      community: true,
      discovery: false,
      commingSoon: false,
    });
    console.log(menuobj);
    console.log(menuobj.community);
  }
  function handleClickd() {
    setMenuobj({
      home: false,
      community: false,
      discovery: true,
      commingSoon: false,
    });
    console.log(menuobj);
    console.log(menuobj.discovery);
  }
  function handleClickcs() {
    setMenuobj({
      home: false,
      community: false,
      discovery: false,
      commingSoon: true,
    });
    console.log(menuobj);
    console.log(menuobj.commingSoon);
  }

  var hstyle = menuobj.home ? (hstyle = "white") : "gray";
  var hiconStyle = menuobj.home ? "red" : "gray";

  var cstyle = menuobj.community ? (cstyle = "white") : "gray";
  var ciconStyle = menuobj.community ? "red" : "gray";

  var dstyle = menuobj.discovery ? (dstyle = "white") : "gray";
  var diconStyle = menuobj.discovery ? "red" : "gray";

  var csstyle = menuobj.commingSoon ? (csstyle = "white") : "gray";
  var csiconStyle = menuobj.commingSoon ? "red" : "gray";

  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className={"redline " + (Active ? "active" : "")}>|</div>
      <ul>
        <li className={menuobj.home ? "active" : ""} onClick={handleClickh}>
          <AiFillHome className="icon active" color={hiconStyle} />
          <h2
            className={menuobj.home ? "active" : ""}
            style={{ color: hstyle }}
          >
            Home
          </h2>
        </li>
        <li
          className={menuobj.community ? "active" : ""}
          onClick={handleClickc}
        >
          <RiCommunityFill className="icon active" color={ciconStyle} />
          <h2
            className={menuobj.community ? "active" : ""}
            style={{ color: cstyle }}
          >
            Community
          </h2>
        </li>
        <li
          className={menuobj.discovery ? "active" : ""}
          onClick={handleClickd}
        >
          <RiCompassDiscoverLine className="icon active" color={diconStyle} />
          <h2
            className={menuobj.discovery ? "active" : ""}
            style={{ color: dstyle }}
          >
            Discovery
          </h2>
        </li>
        <li
          className={menuobj.commingSoon ? "active" : ""}
          onClick={handleClickcs}
        >
          <BiStopwatch className="icon active" color={csiconStyle} />
          <h2
            className={menuobj.commingSoon ? "active" : ""}
            style={{ color: csstyle }}
          >
            Comming Soon
          </h2>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
