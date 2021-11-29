import React from "react";
import { Container, Image, Row, Button } from "react-bootstrap";
import { FaAddressBook, FaDownload } from "react-icons/fa";
import { useHistory } from "react-router";
import logo from "../../images/mainDP.png";
import "./Homepage.css";

const Homepage = () => {
  let history = useHistory();

  return (
    <Container>
      <Image src={logo} className="img-fluid d-block mx-auto maindp" />
      <h3 className="fw-bold text-center mt-4">Monirul Islam</h3>
      <Row className="d-flex justify-content-center">
        <p className="text-secondary introText">
          I'm a Full Stack web developer from{" "}
          <span className="customSecondaryText">Bangladesh</span> . I am
          currently working with:{" "}
          <span className="customPrimaryText">
            React.js, Node.js, Express.js, MongoDB
          </span>
          . I also have real life working experience with JavaScript, PHP,
          MySQL, Wordpress and many more.
        </p>
      </Row>
      <Row className="d-flex justify-content-center">
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

export default Homepage;
