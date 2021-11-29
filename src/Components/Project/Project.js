import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Project.css";

const Project = (props) => {
  const { name, category, image } = props.project;

  const projectDetails = "";

  return (
    <Col>
      <Card className="h-100 bg-transparent projectCard">
        <Card.Img src={image} className="img-fluid projectImg" />
        <Card.Body>
          <h6>{name}</h6>
          <p className="text-secondary">{category}</p>
        </Card.Body>
        <Card.Footer className="border-0 bg-transparent">
          <div className="d-grid gap-2">
            <Button as={NavLink} to={projectDetails} className="btn-dark">
              View Details
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Project;
