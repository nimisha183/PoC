import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import Download from "./download.png";

function Navigation({badge}) {
  console.log({badge})
  return (
    <ReactBootStrap.Navbar bg="light" expand="sm">
      <a className="nav-logo">
        <img src={Download} width="50" height="50" />
      </a>
      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse>
        <a className="nav-link disabled">Badge Count: {badge} </a>
      </ReactBootStrap.Navbar.Collapse>
      <div style={{ textAlign: "center", flex: 12 }}>
        <h1> Intern Registry </h1>
      </div>
      <Link className="navbar-brand" style={{marginRight:"90px"}} to="/details">
        Registered User Database
      </Link>
      <Link className="navbar-brand" to="/ToDo">
        Manage TO-DO
      </Link>
    </ReactBootStrap.Navbar>
  );
}

export default Navigation;
