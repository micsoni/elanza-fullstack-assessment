import React from "react";
import { Col, Card } from "react-bootstrap";

function CareRequestsCards(props) {
  return (
    <Col key={props.id} className="cardin" xs={6} md={4} lg={3}>
      <Card>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Kind of Care: {props.kindOfCare}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CareRequestsCards;
