
/*
* file: session.jsx
* Description:
*   -> Local & user session manipulation
*/

import cookie from 'js-cookie';
import { encodeValue, decodeValue } from "../utils";

export function setCookie(key, value, days = 1) {
  if (process.browser) {
    const today = new Date();
    const resultDate = newDate(today);
    resultDate.setDate(today.getDate() + days);
    cookie.set(key, encodeValue(value), {
      expires: resultDate,
      path: "/",
    });
  }
}

export function removeCookie(key) {
  if (process.browser) {
    cookie.remove(key, { expires: 1})
  }
}

export function getCookie(key) {
  if (process.browser) {
    return decodeValue(cookie.get(key));
  }
  return null;
}

export function setLocalStorage(key, value) {
  if (process.browser) {
    if (typeof value !== "string") {
      window.localStorage.setItem(key, encodeValue(JSON.stringify(value)));
    } else {
      window.localStorage.setItem(key, encodeValue(value));
    }
  }
}

export function removeLocalStorage(key) {
  if (process.browser) {
    window.localStorage.removeItem(key);
  }
}

export function getLocalStoage(key) {
  if (process.browser) {
    const val = window.localStorage.getItem(key);
    return val ? decodeValue(val) : null;
  }
  return null;
}

export async function validateSession() {
  const activate = await fetch("http://localhost:8080/session/activate", {
    method: "GET"})
  if (activate.status != 200) {
    return null;
  }
  const userInfo = await activate.json()
  return userInfo;
}

export async function clearSession() {
  removeLocalStorage("user");
  const deactivate = await fetch("http://localhost:8080/session/logout", {
    method: "POST"
  });
  if (deactivate.status != 200) {
    return false;
  }
  return true;
}
