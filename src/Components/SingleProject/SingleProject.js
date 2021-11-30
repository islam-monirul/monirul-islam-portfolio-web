import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useParams } from "react-router";
import "./SingleProduct.css";

const SingleProject = () => {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    fetch(`https://mighty-reef-51320.herokuapp.com/project/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [projectId]);

  return (
    <Container className="px-5">
      <Row className="py-5">
        {project && (
          <>
            <h1 className="gradientHeading fw-bold mb-4">{project?.name}</h1>
            <h5 className="fw-bold">Project Description</h5>
            <ul className="details">
              {project.details.map((listItem) => (
                <li key={listItem}>{listItem}</li>
              ))}
            </ul>

            <h5 className="fw-bold my-3">Used Technologies</h5>
            <div className="techContainer">
              {project.technologies.map((tech) => (
                <div className="techBox">{tech}</div>
              ))}
            </div>

            <h5 className="fw-bold mt-5 mb-3">Quick Links</h5>
            <div className="linkContainer">
              {project?.liveLink && (
                <Button
                  className="linkButton"
                  onClick={() => window.open(`${project.liveLink}`, "_blank")}
                >
                  <FaExternalLinkAlt />{" "}
                  <span className="align-middle">Live Preview</span>
                </Button>
              )}
              {project?.githubClient !== "null" && (
                <Button
                  variant="dark"
                  onClick={() =>
                    window.open(`${project.githubClient}`, "_blank")
                  }
                >
                  <FaGithub />{" "}
                  <span className="align-middle">Github Client Side Code</span>
                </Button>
              )}
              {project?.githubServer !== "null" && (
                <Button
                  variant="dark"
                  onClick={() =>
                    window.open(`${project.githubServer}`, "_blank")
                  }
                >
                  <FaGithub />{" "}
                  <span className="align-middle">Github Server Side Code</span>
                </Button>
              )}
            </div>
          </>
        )}
      </Row>
    </Container>
  );
};

export default SingleProject;
