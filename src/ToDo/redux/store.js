import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import todoReducer from "./slices/todoSlice";

// console.log("  ");
// console.log("STORE.JS");

const sagaMiddleware = createSagaMiddleware();
// console.log("middleware created" );
export const store = createStore(
  combineReducers({
    todo: todoReducer
  }),
  compose(applyMiddleware(sagaMiddleware))
);
// console.log("reducers combined as todo");
sagaMiddleware.run(rootSaga);
// console.log("run root Saga");
