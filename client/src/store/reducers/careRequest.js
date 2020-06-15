const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case "CREATE_CARE_REQUEST": {
      return [action.payload, ...state];
    }
    default:
      return state;
  }
}
