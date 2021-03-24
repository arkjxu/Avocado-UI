import { SET_LOADING } from "./commonActions";

const defaultState = {
  isLoading: false
};
const CommonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    default:
      return {...state};
  }
};

export default CommonReducer;