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
    <Container>
      <Row>
        <Col md={6}></Col>
        <Col md={6}>
          {loading ? (
            <Spinner animation="grow" variant="success" />
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
