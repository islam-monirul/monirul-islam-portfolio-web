import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Project from "../../Components/Project/Project";
import { Category } from "../../Data/Data";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`https://personal-portfolio-20s7.onrender.com/projects/${filter}`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [filter]);

  return (
    <Container className="py-5">
      <h1 className="gradientHeading text-center pt-5 fw-bold">My Projects</h1>
      <div className="py-4 categoryContainer">
        {Category.map((cat) => (
          <div
            className={filter === cat ? "activeCategoryBox" : "categoryBox"}
            onClick={() => setFilter(cat)}
            key={cat}
          >
            {cat}
          </div>
        ))}
      </div>
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
            className="d-block mx-auto themeSpinner"
          ></Spinner>
        )}
      </Row>
    </Container>
  );
};

export default Projects;
