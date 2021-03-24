import BalanceReducer from "./balanceReducer";
import CommonReducer from "./commonReducer";
import UserReducer from "./userReducer";
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
  common: CommonReducer,
  user: UserReducer,
  balance: BalanceReducer,
});

export default RootReducer;