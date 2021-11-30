import React from "react";
import { Col, Button, Image } from "react-bootstrap";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Project.css";

const Project = (props) => {
  const { name, image, liveLink, _id } = props.project;

  const url = `projectDetails/${_id}`;

  return (
    <Col>
      <figure className="figurebox p-2">
        <Image src={image} className="img-fluid projectImg" />
        <figcaption className="hoverItems">
          <h5 className="fw-bold gradientHeading">{name}</h5>
          <div>
            <Button
              className="projectBtn"
              onClick={() => window.open(`${liveLink}`, "_blank")}
            >
              <FaExternalLinkAlt />
            </Button>

            <Button className="projectBtn" as={NavLink} to={url}>
              <FaInfoCircle />
            </Button>
          </div>
        </figcaption>
      </figure>
    </Col>
  );
};

export default Project;
