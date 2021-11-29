import React from "react";
import { Container, Row } from "react-bootstrap";
import Project from "../../Components/Project/Project";
import { MyProjects } from "../../Data/Data";

const Projects = () => {
  return (
    <Container>
      <h1 className="text-center">My Projects</h1>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-5 py-4"
        style={{ marginRight: "0", marginLeft: "0" }}
      >
        {MyProjects.map((project) => (
          <Project key={project.name} project={project}></Project>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
