import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { CurrentTech } from "../../Data/Data";
import { FaDownload } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { useHistory } from "react-router";

const About = () => {
  let history = useHistory();
  return (
    <Container className="py-5">
      <Row className="d-flex justify-content-center px-md-4">
        <h1 className="gradientHeading text-center mb-3 fw-bold">About Me</h1>
        <div>
          <p className="justifiedText">
            Hi, I am <span className="fw-bold">Monirul Islam</span>. I am a full
            stack web developer from{" "}
            <span style={{ color: "var(--colorSecondary)" }}>Bangladesh</span>.
            I have recently completed my graduation on Computer Science &
            Engineering from United International University. I am working as a
            freelance Full Stack Web Developer for past 1-2 years.
          </p>

          <p className="justifiedText">
            I currently work with :{" "}
            {CurrentTech.map((tech) => (
              <span className="gradientHeading">{tech}</span>
            ))}
            I also have real life working experience with{" "}
            <span className="gradientHeading">
              JavaScript, PHP, MySQL, Wordpress, HTML, CSS, Tailwind CSS
            </span>{" "}
            and many more technologies. Along with web development, I have
            expertise in Graphic Design too.
          </p>

          <p className="justifiedText">
            I am also working as a freelance developer & designer in different
            freelance marketplaces like Fiverr & Upwork. I have already worked
            with clients from 17 different countries all over the world.
          </p>
        </div>

        <div>
          <h5 className="pt-3">Personal Information</h5>
          <ul className="details">
            <li>
              <span className="primaryText">Date of Birth : </span> 9th July,
              1998
            </li>
            <li>
              <span className="primaryText">From : </span> Dhaka, Bangladesh
            </li>
            <li>
              <span className="primaryText">Email : </span>{" "}
              devmonir.uiu.cse@gmail.com
            </li>
          </ul>
        </div>
      </Row>

      <Row className="px-md-4">
        <div className="buttonBox">
          <Button
            className="primaryBtn me-3 px-4 my-2"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1D1uGCZsROP9wMAswV6c3yTWhCf-irUO3/view?usp=sharing",
                "_blank"
              )
            }
          >
            <FaDownload /> <span className="align-middle">Download CV</span>
          </Button>
          <Button
            className="secondaryBtn px-4 my-2"
            onClick={() => history.push("/contact")}
          >
            <FaAddressBook /> <span className="align-middle">Contact Me</span>
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default About;
