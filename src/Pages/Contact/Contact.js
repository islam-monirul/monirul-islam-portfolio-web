import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Contact.css";
import {
  FaPhoneSquareAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "github",
    link: "https://github.com/islam-monirul",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/monirshojib09/",
  },
  {
    name: "fb",
    link: "https://www.facebook.com/monirshojib09/",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    reset();
    console.log(data);

    nextProcess(data);
  };

  const nextProcess = (data) => {
    axios
      .post("https://getform.io/f/07e2aedb-e836-48b4-823d-d756589cdcc6", {
        email: data.email,
        message: data.message,
      })
      .then((response) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className="py-5">
      <Row className="d-flex justify-content-center">
        <Col md={5} lg={4}>
          <h4 className="pb-3">Get in touch</h4>
          <div className="pb-2">
            <p>
              <FaPhoneSquareAlt /> &nbsp;
              <span className="align-middle">+880 152 133 4471</span>
            </p>
            <p>
              <FaEnvelope /> &nbsp;
              <span className="align-middle">devmonir.uiu.cse@gmail.com</span>
            </p>
            <p>
              <FaMapMarkerAlt /> &nbsp;
              <span className="align-middle">Dhaka, Bangladesh</span>
            </p>
          </div>

          <div className="d-flex gap-2">
            {socialLinks.map((link) => (
              <Button
                className="socialLinkBox"
                onClick={() => window.open(`${link?.link}`, "_blank")}
                key={link?.link}
              >
                {link?.name === "github" ? (
                  <FaGithub />
                ) : link?.name === "linkedin" ? (
                  <FaLinkedinIn />
                ) : (
                  <FaFacebook />
                )}
              </Button>
            ))}
          </div>
        </Col>
        <Col md={6} lg={6} className="mt-5 mt-md-0">
          {loading ? (
            <Spinner
              animation="grow"
              variant="success"
              className="d-block mx-auto"
            />
          ) : (
            <>
              {success && (
                <Alert
                  variant="success"
                  onClose={() => setSuccess(false)}
                  dismissible
                >
                  Thank you for contacting me. I will get back to you soon.
                </Alert>
              )}
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="mt-3">This field is required</p>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Write your message here..."
                      {...register("message", { required: true })}
                    />
                    {errors.message && (
                      <p className="mt-3">This field is required</p>
                    )}
                  </Form.Group>
                </Form>

                <div className="d-grid gap-2">
                  <Button type="submit" className="contactBtn">
                    Send Message
                  </Button>
                </div>
              </Form>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
