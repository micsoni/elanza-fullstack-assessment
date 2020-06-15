import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ApplyForm from "./ApplyForm";
import { applyToCareRequest } from "../store/actions/careRequest";

function ApplyFormContainer(props) {
  const dispatch = useDispatch();

  const [careGiver, setCareGiver] = useState({
    name: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const id = parseInt(props.id);
  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      dispatch(applyToCareRequest(careGiver, id));
      setFormSubmitted(true);
    }
    setValidated(true);
  };

  const onChange = (event) => {
    setCareGiver({
      ...careGiver,
      [event.target.name]: event.target.value,
    });
  };

  if (!formSubmitted) {
    return (
      <ApplyForm
        onSubmit={onSubmit}
        onChange={onChange}
        values={careGiver}
        validated={validated}
      />
    );
  }
  return <p className="confirmed">Your request was successfully submitted</p>;
}

export default ApplyFormContainer;
