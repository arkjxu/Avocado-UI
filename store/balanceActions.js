/*
* file: balanceAction.js
* Description:
*   -> Balance operations
*/

import { setLoading } from "./commonActions";
import { GetUserBalances, AddBalance, RemoveBalance as removeBalanceAPI } from "../lib/balances";
import { setNotification, setShowNotification } from "./commonActions";

export const SET_BALANCE = "SET_BALANCE";
export const ADD_BALANCE = "ADD_BALANCE";
export const REMOVE_BALANCE = "REMOVE_BALANCE";

export function setBalances(balances) {
  return {
    type: SET_BALANCE,
    payload: balances,
  }
}

export function addBalance(balance) {
  return {
    type: ADD_BALANCE,
    payload: balance,
  }
}

export function removeBalance(index) {
  return {
    type: REMOVE_BALANCE,
    payload: index
  }
}

export function removeUserBalance(index, balance,) {
  return async (dispatch) => {
    const res = await removeBalanceAPI(balance)
    if (!res) {
      dispatch(setNotification("Unable to remove balance, please try again..."))
      dispatch(setShowNotification(true))
    }
    dispatch(removeBalance(index))
  }
}

export function addNewBalance(balance) {
  return async (dispatch) => {
    const newBalance = await AddBalance(balance)
    if (!!newBalance) {
      dispatch(addBalance(newBalance))
    } else {
      dispatch(setNotification("Unable to add balance, please try again..."))
      dispatch(setShowNotification(true))
    }
  }
}

export function fetchBalances() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const userBalances = await GetUserBalances();
    if (!!userBalances) {
      dispatch(setBalances(userBalances));
    } else {
      dispatch(setNotification("Unable to fetch balances, please refresh and try again..."))
      dispatch(setShowNotification(true))
    }
    dispatch(setLoading(false));
  }
}