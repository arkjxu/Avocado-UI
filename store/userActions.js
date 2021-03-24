import { setLoading } from "./commonActions";
import { clearSession } from "../lib/session";

export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  }
}

export function logOut() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(clearUser());
    await clearSession();
    dispatch(setLoading(false));
  }
}
