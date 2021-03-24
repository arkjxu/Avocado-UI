export const SET_LOADING = "SET_LOADING";
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const SET_SHOW_NOTIFICATION = "SET_SHOW_NOTIFICATION"

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    payload: isLoading,
  }
}

export function setNotification(noti) {
  return {
    type: SET_NOTIFICATION,
    payload: noti,
  }
}

export function setShowNotification(isShow) {
  return {
    type: SET_SHOW_NOTIFICATION,
    payload: isShow,
  }
}