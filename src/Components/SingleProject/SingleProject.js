import React, { useEffect, useState } from "react";
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router";
import "./SingleProduct.css";

const SingleProject = () => {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  useEffect(() => {
    fetch(`https://personal-portfolio-20s7.onrender.com/project/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [projectId]);

  return (
    <Container className="px-5">
      <Row className="py-5">
        {project && (
          <>
            <Col lg={6} sm={12} className="py-4">
              <h1 className="gradientHeading fw-bold mb-4">{project?.name}</h1>
              <h5 className="fw-bold">Project Description</h5>
              <ul className="details">
                {project.details.map((listItem) => (
                  <li key={listItem}>{listItem}</li>
                ))}
              </ul>

              <h5 className="fw-bold mt-5 mb-3">Used Technologies</h5>
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
                    <span className="align-middle">Client Side Code</span>
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
                    <span className="align-middle">Server Side Code</span>
                  </Button>
                )}
              </div>

              {project?.rating !== 0 &&
                project?.clientName !== null &&
                project?.review !== "null" &&
                project?.clientCountry !== "null" &&
                project?.reviewPlace !== "null" && (
                  <div className="mt-5">
                    <hr />
                    <p className="mt-3">
                      <span className="align-middle primaryText">
                        {project.clientName}
                      </span>
                      {" | "}
                      <span className="align-middle text-secondary">
                        {project.clientCountry}
                      </span>
                    </p>
                    <Rating
                      initialRating={project.rating}
                      readonly
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      className="starIcon mb-2"
                    />

                    <p className="text-secondary">{project.review}</p>
                  </div>
                )}
            </Col>

            <Col lg={6} sm={12} className="py-4">
              <Image
                src={project?.screenshot}
                className="img-fluid p-2 border"
              />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default SingleProject;
