import React from "react";
import { Container, Nav, NavDropdown, Navbar, Image, } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import loginLogo from "../../assets/loginLogo.png";

import "./Header.css";

function Header() {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="xl"
        className="bg-dark nav p-0 m-0"
        variant="dark"
      >
        <Container fluid className="p-0 m-0">
          <Navbar.Brand href="#home" className="p-0 m-0">
            <Image
              src={logo}
              alt="Compony Logo"
              className="mt-0 mb-0 p-0 m-0"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" style={{ padding: '20px' }}>
              <Nav.Link href="#home" className="home">
                HOME
              </Nav.Link>
              <NavDropdown title="ABOUT US" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Task 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Task 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Task 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="SERVICES & SUPPORT"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Task 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Task 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Task 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#technologies">TECHNOLOGIES</Nav.Link>
              <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="#contactus">CONTACT US</Nav.Link>
              <Nav.Link href="#careers">CAREERS</Nav.Link>
              <Nav.Link href="#hiredevelopers">HIRE DEVELOPERS</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <button className="sortbox-btn">SORTBOXS</button>
              <Nav.Link eventKey={2} href="#user" className="icon-link">
                <i className="fa-regular fa-user fa-xl icon"></i>
              </Nav.Link>
              <Nav.Link href="#login" className="icon">
                <div className="login-logo-container">
                  <Image src={loginLogo} alt="Login" className="login-logo" />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;