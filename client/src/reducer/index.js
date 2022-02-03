const initialState = {
  weather:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA":
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
