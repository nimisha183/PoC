import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { fetchSuccess } from "../slices/todoSlice";

//console.log("  ");
// console.log("TODOSAGA.JS");

export function* watchTodos() {
  //yield takeLatest(pattern,...) matches pattern to the store action
  // takeLatest starts a new saga and cancels old actions
  yield takeLatest("todo/fetch", fetchTodos);
  yield takeLatest("todo/add", addTodos);
  // console.log("yield todo/fetch and add done");
  //fetchTodos & addTodos are the action dispatch generator function

  yield takeLatest("todo/delet", deleteTodos);
  yield takeLatest("todo/edit", editTodos);
  yield takeLatest("todo/check", checkTodos);
}

//define url request
const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

function* fetchTodos() {
  async function fetchTodos() {
    return request.get().then(({ data }) => data);
  }
  // get gets the data, then saves the result
  //i.e. we get the data from fetch call
  //now we save it by calling the generator function again!
  const data = yield call(fetchTodos);
  // console.log("(IN TODO SAGAS )data yield call after getting data and then");
  const payload = data.slice(0, 5);

  //dispatch request to middleware through put effect
  yield put(fetchSuccess(payload));
  // console.log("fetch success call dispatch for fetch todo");
}

async function addTodosRequest(ID, payload) {
  return request
    .post("", {
      id: ID,
      title: payload,
      completed: false,
    })
    .then(({ data }) => data);
}

function* addTodos({ payload }) {
  try {
    const { list } = yield select((state) => state.todo);
    const lastItem = list.length;
    const ID = lastItem + 1;

    //try and catch
    const data = yield call(addTodosRequest, ID, payload);

    yield put(fetchSuccess([...list, data]));
  } catch (e) {
    console.log(e.message);
  }
}

function* deleteTodos({ payload }) {
  const { list } = yield select((state) => state.todo);
  // console.log("delete id is:"+payload);
  // console.log(list);
  async function deleteTodosRequest() {
    return axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${payload}`)
      .then(() => true)
      .catch(console.error);
  }
  yield call(deleteTodosRequest);
  const newList = list.filter((list) => {
    return list.id !== payload;
  });
  //console.log(newList);
  yield put(fetchSuccess([...newList]));
}

function* editTodos({ payload }) {
  //  console.log("payload:"+payload);
  console.log("edit call dispatched", payload);

  const { list } = yield select((state) => state.todo);

  async function editTodosRequest() {
    const request = {
      id: payload[1],
      title: payload[0],
    };
    // console.log(request.id)
    return await axios
      .put(`https://jsonplaceholder.typicode.com/todos/${payload[1]}`, request)
      .then(({ data }) => data);
  }
  const response = yield call(editTodosRequest);
  console.log(response);
  console.log("listis:" + list);
  const newList = list.map((list) => {
    if (list.id === payload[1]) {
      return {
        userId: list.userId,
        id: list.id,
        title: payload[0],
        completed: list.completed,
      };
    } else return list;
  });
  // console.log(newList);
  yield put(fetchSuccess([...newList]));
}

function* checkTodos({ payload }) {
  const { list } = yield select((state) => state.todo);
  // console.log(list);
  // console.log(payload[0]);
  async function checkTodosRequest() {
    const request = {
      id: payload[1],
      completed: payload[0],
    };
    // console.log(request.id)
    return await axios
      .put(`https://jsonplaceholder.typicode.com/todos/${payload[1]}`, request)
      .then(({ data }) => data);
  }
  const response = yield call(checkTodosRequest);
  // console.log(response);

  const newList = list.map((list) => {
    if (list.id === payload[1]) {
      return (
        // <div className={list.completed ? "line" : ""}>
        //list.completed = payload[0]
        //immutable state here, pass newList to fetchSuccess reducer which will change the state
        /* </div> */
        {
          userId: list.userId,
          id: list.id,
          title: list.title,
          completed: payload[0],
        }
      );
    } else return list;
  });
  // console.log(newList);
  yield put(fetchSuccess([...newList]));
}
