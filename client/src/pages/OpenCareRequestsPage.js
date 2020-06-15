import React, { useEffect } from "react";
import CareRequestsCards from "../components/CareRequestsCards";
import { Container, Row } from "react-bootstrap";
import { fetchCareRequestAction } from "../store/actions/careRequest";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function CareRequestsCardsPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const requests = useSelector((state) => state.careRequests);

  const openRequests = requests.filter(
    (careRequest) => careRequest.status === "open"
  );

  useEffect(() => {
    dispatch(fetchCareRequestAction());
  }, [dispatch]);

  if (!user) {
    return <Redirect to="/" />;
  }

  const createCards = () => {
    const cards = openRequests.map((careRequest) => {
      return <CareRequestsCards key={careRequest.id} {...careRequest} />;
    });
    return cards;
  };

  return (
    <div className="main">
      <Container>
        <h3>Open Requests</h3>
        {!openRequests.length && <p>No open requests</p>}
        <Row>{createCards()} </Row>
      </Container>
    </div>
  );
}

export default CareRequestsCardsPage;
