import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink to="/login" style={{textDecoration:"none"}}><Navbar.Brand href="#home">User Registration</Navbar.Brand></NavLink>
          <Nav className="me-auto">
          <NavLink to="/" style={{textDecoration:"none"}}><Navbar.Brand>Home</Navbar.Brand></NavLink>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
