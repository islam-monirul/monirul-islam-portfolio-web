import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

const WorkExperience = () => {
  const [works, setWorks] = useState();

  useEffect(() => {
    fetch("https://mighty-reef-51320.herokuapp.com/works")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setWorks(data);
      });
  }, []);
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1 className="gradientHeading text-center">Work Experience</h1>
        <Col md={9} className="py-4">
          <VerticalTimeline>
            {works?.map((work) => (
              <VerticalTimelineElement
                className="vertical-timeline-element"
                date={work?.workPeriod}
                iconStyle={{ background: "#23d5ab", color: "#fff" }}
                icon={<FaGraduationCap />}
                key={work?._id}
              >
                <h6 className="vertical-timeline-element-title">
                  {work?.designation}
                </h6>
                <p
                  className="lh-1 mt-1"
                  style={{ color: "var(--colorSecondary)" }}
                >
                  {work?.workplace}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkExperience;
