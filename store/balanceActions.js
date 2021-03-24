/*
* file: balanceAction.js
* Description:
*   -> Balance operations
*/

import { setLoading } from "./commonActions";
import { GetUserBalances, AddBalance, RemoveBalance as removeBalanceAPI } from "../lib/balances";
import { toast } from 'react-toastify';

export const SET_BALANCE = "SET_BALANCE";
export const ADD_BALANCE = "ADD_BALANCE";
export const REMOVE_BALANCE = "REMOVE_BALANCE";
export const CLEAR_BALANCE = "CLEAR_BALANCE";

export function clearBalance() {
  return {
    type: CLEAR_BALANCE,
  }
}

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
      toast.error("Oops, unable to remove balance, please try again.");
    } else {
      dispatch(removeBalance(index))
    }
  }
}

export function addNewBalance(balance) {
  return async (dispatch) => {
    const newBalance = await AddBalance(balance)
    if (!!newBalance) {
      dispatch(addBalance(newBalance))
    } else {
      toast.error("Oops, unable to add balance, please try again.");
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
      toast.error("Oops, unable to fetch your balances, please try again.");
    }
    dispatch(setLoading(false));
  }
}