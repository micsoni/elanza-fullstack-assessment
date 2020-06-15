import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Card } from "react-bootstrap";

function CareRequestsCards(props) {
  const user = useSelector((state) => state.user);
  const css = user === "careGiver" ? {} : { className: "disabledLink" };
  return (
    <Col key={props.id} className="cardin" xs={6} md={4} lg={3}>
      <Link to={`/care-request/${props.id}`} {...css}>
        <Card>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>Kind of Care: {props.kindOfCare}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default CareRequestsCards;
