const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case "CREATE_CARE_REQUEST": {
      return [action.payload, ...state];
    }
    case "FETCH_CARE_REQUEST": {
      return action.payload;
    }
    case "APPLY_CARE_REQUEST": {
      const updatedCareRequest = state.map((careRequest) => {
        if (careRequest.id === action.payload.id) {
          return action.payload;
        }
        return careRequest;
      });
      return updatedCareRequest;
    }
    default:
      return state;
  }
}
