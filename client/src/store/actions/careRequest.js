export function newCareRequest(newRequest) {
  return {
    type: "CREATE_CARE_REQUEST",
    payload: newRequest,
  };
}

export function createNewCareRequest(careRequest) {
  return async function (dispatch) {
    const response = await fetch("/api/careRequest", {
      method: "POST",
      body: JSON.stringify(careRequest),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    const action = newCareRequest(response);
    dispatch(action);
  };
}

export function fetchedRequests(requests) {
  return {
    type: "FETCH_CARE_REQUEST",
    payload: requests,
  };
}

export function fetchCareRequestAction() {
  return async function (dispatch) {
    const response = await fetch("/api/careRequest").then((res) => res.json());
    const action = fetchedRequests(response);
    dispatch(action);
  };
}

export function takenCareRequest(takenRequest) {
  return {
    type: "APPLY_CARE_REQUEST",
    payload: takenRequest,
  };
}

export function applyToCareRequest(careGiver, id) {
  return async function (dispatch) {
    const applyRequest = {
      id,
      careGiver,
    };
    const response = await fetch("/api/careRequest", {
      method: "PUT",
      body: JSON.stringify(applyRequest),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    const action = takenCareRequest(response);
    dispatch(action);
  };
}
