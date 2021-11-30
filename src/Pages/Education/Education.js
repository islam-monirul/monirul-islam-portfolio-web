import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import "./Education.css";

const Education = () => {
  const [educations, setEducations] = useState();

  useEffect(() => {
    fetch("https://mighty-reef-51320.herokuapp.com/education")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setEducations(data);
      });
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1 className="gradientHeading text-center">Education</h1>
        <Col md={9} className="py-4">
          <VerticalTimeline>
            {educations?.map((education) => (
              <VerticalTimelineElement
                className="vertical-timeline-element"
                date={education?.passingYear}
                iconStyle={{ background: "#23d5ab", color: "#fff" }}
                icon={<FaGraduationCap />}
                key={education._id}
              >
                <h5 className="vertical-timeline-element-title">
                  {education?.degree}
                </h5>
                <h6 className="vertical-timeline-element-subtitle lh-1">
                  {education?.subject}
                </h6>
                <p className="lh-1">
                  <span style={{ color: "var(--colorPrimary)" }}>
                    {parseFloat(education?.result).toFixed(2)}
                  </span>{" "}
                  out of{" "}
                  <span style={{ color: "var(--colorPrimary)" }}>
                    {parseFloat(education?.outOf).toFixed(2)}
                  </span>
                </p>
                <p className="lh-1 mt-1">{education?.institute}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
