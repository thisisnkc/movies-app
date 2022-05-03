import React from "react";
import "./header.scss";
import {FiSearch} from 'react-icons/fi';


function Header() {
  return (
    <div className="header">
      <div className="left">
        <img src="assets/logo.png" alt="logo"></img>
        <h1>Thisisnkc</h1>
      </div>

      <div className="middle">
        <h1>TV Series</h1>
        <h1>Movies</h1>
        <h1>Animes</h1>
      </div>

      <div className="right">
      <FiSearch className="icon"/>
      <input type="text" className="btn" placeholder="Search"></input>
      </div>
    </div>
  );
}

export default Header;
