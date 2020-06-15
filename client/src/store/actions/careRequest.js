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
