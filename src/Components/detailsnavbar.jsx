import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import Download from "./download.png";

function Navigation({ badge }) {
  return (
    <ReactBootStrap.Navbar bg="light" expand="sm" justify-content-center>
      <a className="nav-logo">
        <img src={Download} width="50" height="50" />
      </a>
      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse>
        <a className="nav-link disabled">Registered Users: {badge} </a>
      </ReactBootStrap.Navbar.Collapse>
      <ul className="navbar-nav justify-content-end"></ul>
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      {/* <Link className="navbar-brand" to="/about">
        About
      </Link> */}
    </ReactBootStrap.Navbar>
  );
}

export default Navigation;
