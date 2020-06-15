import React from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";

function ApplyForm(props) {
  return (
    <Container className="main">
      <Form noValidate validated={props.validated} onSubmit={props.onSubmit}>
        <Form.Group as={Row} className="justify-content-center">
          <Col sm={8} md={6} lg={4}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={props.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="justify-content-center">
          <Col sm={8} md={6} lg={4}>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              onChange={props.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="justify-content-center">
          <Col>
            <Button variant="info" type="submit">
              Apply
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default ApplyForm;
