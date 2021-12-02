import React from "react";
import { Col, Button } from "react-bootstrap";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Project.css";

const Project = (props) => {
  const { name, liveLink, _id, screenshot } = props.project;

  const url = `projectDetails/${_id}`;

  return (
    <Col>
      <figure
        className="figurebox p-2"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: "cover",
        }}
      >
        <div className="captionDiv"></div>
        <figcaption className="hoverItems">
          <h5 className="fw-bold text-white">{name}</h5>
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
