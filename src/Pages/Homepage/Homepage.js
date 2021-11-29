import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../../images/mainDP.png";
import "./Homepage.css";

const Homepage = () => {
  return (
    <Container>
      <Image src={logo} className="img-fluid d-block mx-auto maindp" />
    </Container>
  );
};

export default Homepage;
