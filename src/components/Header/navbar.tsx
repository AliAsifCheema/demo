import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavbarProps } from "./propsInterface/navbarProps";

function MyNavbar({ navbarData }: NavbarProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="transparent" expand="md" expanded={expanded}>
      <Container>
        <Navbar.Brand className="brand-logo" href="#">
          <img src={navbarData.brand.logo} className="mx-3" alt="exclude" />
          {navbarData.brand.name}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleExpanded}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {navbarData.links.map((link, index) => (
              <Nav.Link className="navbar-links" key={index} href={link.href}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="mr-auto align-items-center">
            <Nav.Link
              className="navbar-links"
              href={navbarData.buttons.login.href}
            >
              {navbarData.buttons.login.name}
            </Nav.Link>
            <Nav.Link
              className="register-btn mx-3 text-white"
              href={navbarData.buttons.register.href}
            >
              {navbarData.buttons.register.name}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
