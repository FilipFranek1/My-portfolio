import React from "react";
import "../css/navbar/navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="icons">
        <NavLink to="/">
          <i className="fas fa-home " />
          <div className="text">home</div>
        </NavLink>
        <NavLink to="/projects">
          <i className="far fa-eye  " />
          <div className="text">projects</div>
        </NavLink>

        <NavLink to="/about">
          <i className="far fa-user  " />
          <div className="text">about</div>
        </NavLink>

        <NavLink to="/skills">
          <i className="fas fa-code  " />
          <div className="text">skills</div>
        </NavLink>

        <NavLink to="/contact">
          <i className="far fa-envelope " />
          <div className="text">contact</div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
