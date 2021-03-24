import { SET_USER, CLEAR_USER } from "./userActions";

const defaultState = {
  user: null,
};
const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload}
    case CLEAR_USER:
      return {...state, user: null}
    default:
      return {...state};
  }
};

export default UserReducer;