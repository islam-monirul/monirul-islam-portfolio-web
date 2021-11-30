import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpen,
  FaBrain,
  FaLayerGroup,
  FaGraduationCap,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(0);

  const changeNav = (num) => {
    setActive(num);
  };

  return (
    <div className="sideNav">
      <Button
        variant="transparent"
        className={active === 0 ? "iconBox activeIconBox" : "iconBox"}
        onClick={() => changeNav(0)}
        as={NavLink}
        to="/home"
      >
        <p className="iconTooltip">Home</p>
        <FaHome className="icon" />
      </Button>
      <Button
        variant="transparent"
        className={active === 1 ? "iconBox activeIconBox" : "iconBox"}
        onClick={() => changeNav(1)}
        as={NavLink}
        to="/about"
      >
        <p className="iconTooltip">About</p>
        <FaUser className="icon" />
      </Button>
      <Button
        variant="transparent"
        className={active === 2 ? "iconBox activeIconBox" : "iconBox"}
        onClick={() => changeNav(2)}
        as={NavLink}
        to="/skills"
      >
        <p className="iconTooltip">Skills</p>
        <FaBrain className="icon" />
      </Button>
      <Button
        variant="transparent"
        className={active === 3 ? "iconBox activeIconBox" : "iconBox"}
        onClick={() => changeNav(3)}
        as={NavLink}
        to="/projects"
      >
        <p className="iconTooltip">Projects</p>
        <FaLayerGroup className="icon" />
      </Button>
      <Button
        variant="transparent"
        className={active === 4 ? "iconBox activeIconBox" : "iconBox"}
        onClick={() => changeNav(4)}
        as={NavLink}
        to="/education"
      >
        <p className="iconTooltip">Education</p>
        <FaGraduationCap className="icon" />
      </Button>
      <Button
        variant="transparent"
        className={active === 5 ? "iconBox activeIconBox" : "iconBox"}
        onClick={() => changeNav(5)}
        as={NavLink}
        to="/experience"
      >
        <p className="iconTooltip">Experience</p>
        <FaBriefcase className="icon" />
      </Button>
      <Button
        variant="transparent"
        className={active === 6 ? "iconBox activeIconBox" : "iconBox"}
        onClick={() => changeNav(6)}
        as={NavLink}
        to="/contact"
      >
        <p className="iconTooltip">Contact</p>
        <FaEnvelopeOpen className="icon" />
      </Button>
    </div>
  );
};

export default Sidebar;
