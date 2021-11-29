import React from "react";
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
  return (
    <div className="sideNav">
      <Button variant="transparent" className="iconBox" as={NavLink} to="/home">
        <p className="iconTooltip">Home</p>
        <FaHome className="icon" />
      </Button>
      <Button
        variant="transparent"
        className="iconBox"
        as={NavLink}
        to="/about"
      >
        <p className="iconTooltip">About</p>
        <FaUser className="icon" />
      </Button>
      <Button
        variant="transparent"
        className="iconBox"
        as={NavLink}
        to="/skills"
      >
        <p className="iconTooltip">Skills</p>
        <FaBrain className="icon" />
      </Button>
      <Button
        variant="transparent"
        className="iconBox"
        as={NavLink}
        to="/projects"
      >
        <p className="iconTooltip">Projects</p>
        <FaLayerGroup className="icon" />
      </Button>
      <Button
        variant="transparent"
        className="iconBox"
        as={NavLink}
        to="/education"
      >
        <p className="iconTooltip">Education</p>
        <FaGraduationCap className="icon" />
      </Button>
      <Button
        variant="transparent"
        className="iconBox"
        as={NavLink}
        to="/experience"
      >
        <p className="iconTooltip">Experience</p>
        <FaBriefcase className="icon" />
      </Button>
      <Button
        variant="transparent"
        className="iconBox"
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
