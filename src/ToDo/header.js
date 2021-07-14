import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

const Heading = () => {
  return (
    <>
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand >Manage your tasks</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="./">
              <strong>Return to Home</strong>
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
    <h1 style={{ marginTop: "1rem" }} className="addTodo">
          {" "}
          To-Do List{" "}
        </h1>
    </>
  );
}
export default Heading;