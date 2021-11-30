import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Project from "../../Components/Project/Project";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://mighty-reef-51320.herokuapp.com/projects/${filter}`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [filter]);

  return (
    <Container>
      <h1 className="gradientHeading text-center">My Projects</h1>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-5 py-4"
        style={{ marginRight: "0", marginLeft: "0" }}
      >
        {projects.length > 0 ? (
          projects.map((project) => (
            <Project key={project._id} project={project}></Project>
          ))
        ) : (
          <Spinner
            animation="grow"
            className="d-block mx-auto"
            variant="white"
          ></Spinner>
        )}
      </Row>
    </Container>
  );
};

export default Projects;
