import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import RootReducer from './reducer';

const makeStore = () => createStore(RootReducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, {debug: false});