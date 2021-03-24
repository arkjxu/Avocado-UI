/*
* file: balanceReducer.js
* Description:
*   -> Balance operations
*/

import { ADD_BALANCE, REMOVE_BALANCE, SET_BALANCE } from "./balanceActions";

const defaultState = {
  balances: null,
};
const BalanceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {...state, balances: action.payload};
    case ADD_BALANCE:
      return {...state, balances: [...state.balances, action.payload]}
    case REMOVE_BALANCE:
      const newBalance = [...state.balances];
      newBalance.splice(action.payload, 1);
      return {...state, balances: newBalance}
    default:
      return {...state};
  }
};

export default BalanceReducer;