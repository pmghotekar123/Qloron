// GetInTouch.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MailImage from "../../assets/mail.jpg";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="align-items-center">
          <img className="MailImage" src={MailImage} alt="MailImage" />
        </Col>
        <Col md={6} className="FillForm">
          <p>
            Please fill out our request for a proposal form to get a quote or
            contact us about your upcoming project. We’ll get back to you
            shortly.
          </p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                className="FormControlUnderline"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                className="FormControlUnderline"
              />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Your Mobile Number"
                className="FormControlUnderline"
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your Message"
                className="FormControlUnderline"
              />
            </Form.Group>
            <div className="sb">
            <Button className="SubmitButton" variant="primary" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInTouch;
