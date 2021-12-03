import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import { Technologies } from "../../Data/Data";
import "./Skills.css";

const Skills = () => {
  return (
    <Container className="py-5 h-100 d-flex flex-column justify-content-md-center">
      <Row className="d-flex justify-content-center">
        <h1 className="gradientHeading text-center fw-bold">My Skills</h1>
      </Row>

      <Row className="py-3">
        <h4 className="gradientHeading">Languages</h4>
        <hr className="text-secondary" />
        <div className="skillsetContainer">
          {Technologies.programmingLanguages.map((lang) => (
            <Image src={lang} key={lang} className="img-fluid" />
          ))}
        </div>
      </Row>
      <Row className="py-3">
        <h4 className="gradientHeading">Front-end Technologies</h4>
        <hr className="text-secondary" />
        <div className="skillsetContainer">
          {Technologies.frontend.map((lang) => (
            <Image src={lang} key={lang} className="img-fluid" />
          ))}
        </div>
      </Row>
      <Row className="py-3">
        <h4 className="gradientHeading">Back-end Technologies</h4>
        <hr className="text-secondary" />
        <div className="skillsetContainer">
          {Technologies.backend.map((lang) => (
            <Image src={lang} key={lang} className="img-fluid" />
          ))}
        </div>
      </Row>
      <Row className="py-3">
        <h4 className="gradientHeading">Database</h4>
        <hr className="text-secondary" />
        <div className="skillsetContainer">
          {Technologies.database.map((lang) => (
            <Image src={lang} key={lang} className="img-fluid" />
          ))}
        </div>
      </Row>
      <Row className="py-3">
        <h4 className="gradientHeading">More Familiar Technologies</h4>
        <hr className="text-secondary" />
        <div className="skillsetContainer">
          {Technologies.familiar.map((lang) => (
            <Image src={lang} key={lang} className="img-fluid" />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default Skills;
