import React from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";


function CareForm(props) {
  return (
    <Container className="main">
      <Form noValidate validated={props.validated} onSubmit={props.onSubmit}>
        <Form.Group as={Row} className="justify-content-center">
          <Form.Label column sm={3}>
            Name
          </Form.Label>
          <Col sm={8} md={6} lg={4}>
            <Form.Control
              type="text"
              name="name"
              required
              onChange={props.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Group as={Row} className="justify-content-center">
          <Form.Label column sm={3}>
            Type of Care
          </Form.Label>
          <Col sm={8} md={6} lg={4}>
            <Form.Control
              as="select"
              name="kindOfCare"
              required
              onChange={props.onChange}
              value={props.values.kind}
            >
              <option>household</option>
              <option>medical</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="justify-content-center">
          <Form.Label column sm={3}>
           Start Date and Time
          </Form.Label>
          <Col sm={8} md={6} lg={4}>
            <Form.Control
              type="datetime-local"
              name="startDate"
              required
              onChange={props.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="justify-content-center">
          <Form.Label column sm={3}>
           End Date and Time
          </Form.Label>
          <Col sm={8} md={6} lg={4}>
            <Form.Control
              type="datetime-local"
              name="endDate"
              required
              onChange={props.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="justify-content-center">
          <Form.Label column sm={3}>
            Extra Information
          </Form.Label>
          <Col sm={8} md={6} lg={4}>
            <Form.Control
              as="textarea"
              name="extraInfo"
              onChange={props.onChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="justify-content-center">
          <Col sm={{ span: 10, offset: 3 }}>
            <Button variant="info" type="submit">
              Create Request
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default CareForm;
