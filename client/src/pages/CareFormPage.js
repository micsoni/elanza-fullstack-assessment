import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CareForm from "../components/CareForm";
import { Redirect } from "react-router-dom";
import { createNewCareRequest } from "../store/actions/careRequest";

function CareFormPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [careRequest, setCareRequest] = useState({
    name: "",
    kindOfCare: "household",
    startDate: "",
    endDate: "",
    extraInfo: "",
  });
  const [validated, setValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      dispatch(createNewCareRequest(careRequest));
      setFormSubmitted(true);
    }
    setValidated(true);
  };

  const onChange = (event) => {
    setCareRequest({
      ...careRequest,
      [event.target.name]: event.target.value,
    });
  };

  if (user !== "client") {
    return <Redirect to="/" />;
  }

  if (!formSubmitted) {
    return (
      <div className="main">
        <CareForm
          onSubmit={onSubmit}
          onChange={onChange}
          values={careRequest}
          validated={validated}
        />
      </div>
    );
  }
  return <p className="confirmed">Your request was successfully submitted</p>;
}

export default CareFormPage;
