import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import bellicon from "../../assets/bell_icon.svg";
import { caretIcon, profileImage, searchIcon } from "../../assets";
import { logout } from "../../firebase";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv shows</li>
          <li>Movies</li>
          <li>New & popular</li>
          <li>my list</li>
          <li>browse by language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="searchIcon" className="icons" />
        <p>Children</p>
        <img src={bellicon} alt="" />
        <div className="navbar-profile">
          <img src={profileImage} alt="" />
          <img src={caretIcon} alt="" srcset="" />
          <div className="dropdown">
            <p onClick={() => logout()}>sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
