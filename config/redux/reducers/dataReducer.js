const initialState = {
  data: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_CAR":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
