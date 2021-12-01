import React from "react";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./TopBar.css";
import mainlogo from "../../images/LOGO.png";

const TopBar = () => {
  return (
    <Navbar variant="dark" expand={false} className="topbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <Image src={mainlogo} className="img-fluid topbarLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <Image src={mainlogo} className="img-fluid topbarLogo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                as={NavLink}
                to="/home"
                style={{ color: "#23d5ab" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#23a6d5",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/projects"
                style={{ color: "#23d5ab" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#23a6d5",
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/education"
                style={{ color: "#23d5ab" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#23a6d5",
                }}
              >
                Education
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/experience"
                style={{ color: "#23d5ab" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#23a6d5",
                }}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                style={{ color: "#23d5ab" }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "#23a6d5",
                }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default TopBar;
