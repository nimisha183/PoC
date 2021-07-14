import { all, fork } from "redux-saga/effects";

import { watchTodos } from "./todoSaga";

// console.log("  ");
// console.log("SAGAS/INDEX.JS");

export default function* root() {
  // console.log("fork watch todos called");
  yield all([fork(watchTodos)]);
  // console.log("yielded all in watch todos");
}

