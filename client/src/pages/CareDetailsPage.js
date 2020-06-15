import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareRequestAction } from "../store/actions/careRequest";
import ApplyFormContainer from "../components/ApplyFormContainer";

function CareDetails(props) {
  const [showApply, setShowApply] = useState(false);
  const user = useSelector((state) => state.user);
  const careRequests = useSelector((state) => state.careRequests);

  const dispatch = useDispatch();

  const careId = props.match.params.id;
  const currentRequest = careRequests.find(
    (request) => request.id === parseInt(careId)
  );

  useEffect(
    function () {
      if (!currentRequest) {
        dispatch(fetchCareRequestAction());
      }
    },
    [currentRequest, dispatch]
  );

  if (user !== "careGiver") {
    return <Redirect to="/" />;
  }

  if (!currentRequest) {
    return <p>no request</p>;
  }

  const startDate = new Date(currentRequest.startDate).toLocaleString();
  const endDate = new Date(currentRequest.endDate).toLocaleString();
  return (
    <div className="main">
      <Card className="text-center">
        <Card.Header>Care Request</Card.Header>
        <Card.Body>
          <Card.Title>{currentRequest.name}</Card.Title>
          <Card.Text>Kind of Care: {currentRequest.kindOfCare}</Card.Text>
          <Card.Text>
            Start date and time: <b>{startDate} </b>
            <br />
            End date and time: <b>{endDate}</b>
            <br />
          </Card.Text>
          <Card.Text>Extra information: {currentRequest.extraInfo}</Card.Text>
          <Button
            variant="info"
            onClick={() => setShowApply(!showApply)}
            disabled={currentRequest.status === "closed"}
          >
           I want to apply to this request
          </Button>
        </Card.Body>
        {showApply && <ApplyFormContainer id={currentRequest.id} />}
        <Card.Footer className="text-muted">
          Status: {currentRequest.status}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CareDetails;
