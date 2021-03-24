import { SET_LOADING, SET_NOTIFICATION, SET_SHOW_NOTIFICATION } from "./commonActions";

const defaultState = {
  isLoading: false,
  notification: "",
  showNotification: false,
};
const CommonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.payload}
    case SET_NOTIFICATION:
      return {...state, notification: action.payload}
    case SET_SHOW_NOTIFICATION:
      return {...state, showNotification: action.payload}
    default:
      return {...state};
  }
};

export default CommonReducer;