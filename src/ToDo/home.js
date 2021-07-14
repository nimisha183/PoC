import "./styles.css";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { add, fetch, delet, check } from "./redux/slices/todoSlice";
import Header from "./header";
import EditModal from "./editmodal";
import OpenModal from "./modal";

// console.log("  ");
// console.log("APP.JS");

// function EditTodo(title) {

//   return (
//     null
//   )
// }

function TodoListItem({ title, completed, id }) {
  const dispatch = useDispatch();
  // const [status, setStatus] = React.useState(completed);

  // console.log("UI for list called in todoListItem");
  // console.log("yet to define onCheck event!");
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className={completed ? "line" : ""}>
            <input
              className="post"
              type="checkbox"
              defaultChecked={completed}
              onClick={(e) => {
                // console.log(status);
                // setStatus(e.target.checked);
                // console.log(e.target.checked);
                dispatch(check([e.target.checked, id]));
              }}
            />
            <strong>{title}</strong>
          </div>
        </div>
        <div className="actions">
          {/* <Popup trigger={<Button className="addTodo"> Edit</Button>} modal>
            <span> hiiii</span>
          </Popup> */}
          {/* <Button
            style={{ marginLeft: "10px" }}
            className="addTodo"
            onClick={()=>EditTodo(title)}>
            Edit
          </Button> */}
          <OpenModal title={title} id={id} />
          <Button
            onClick={() => {
              dispatch(delet(id));
            }}
            style={{ marginLeft: "10px" }}
            className="addTodo">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}

function TodoList() {
  // console.log("TodoList called");
  //useSelector used to retrieve a particular state from store
  const { list } = useSelector((state) => state.todo);
  // console.log("retrieval of state.todo from state using useSelector");
  if (!list.length) {
    return null;
  }
  // console.log({list});
  return (
    <>
      {list.map((item) => {
        // console.log("list not empty, hence mapped");
        // console.log("todoList item called");
        // ...item in TodoListItem is array destructuring, it works
        return (
          <div className="post" key={item.id}>
            <TodoListItem {...item} />
          </div>
        );
      })}
    </>
  );
}

function AddTodo() {
  //here we dispatch action add
  const dispatch = useDispatch();
  // console.log("again dispatch called for add on button click event handled");
  const [todoName, setTodoName] = React.useState("");
  // console.log("defined a local state inside App for name input");
  return (
    <div style={{ marginLeft: "10px" }} className="addTodo">
      {" "}
      <br />
      <input
        className="big-input"
        type="text"
        // size="lg"
        // fullWidth
        // style={{ width: "100%" }}
        // style={{fontSize: 40}}
        //       inputProps={{ style: { width: 100% } }}
        //  wrapperStyle={ width: 1000 }
        placeholder="Enter title"
        style={{ marginBottom: "20px" }}
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <Button
        onClick={() => {
          dispatch(add(todoName));
          setTodoName("");
        }}
        style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Add
      </Button>
    </div>
  );
}

function TodoApp() {
  // we are dispatching fetch each time app loads
  // as we need to render the full list that time
  const dispatch = useDispatch();

  //dispatcing action (fetch is an action)

  React.useEffect(() => {
    dispatch(fetch());
  }, []);

  return (
    //we show todo list and add a button to add todo
    <form onSubmit={(e) => e.preventDefault()}>
      <AddTodo />
      <TodoList />
    </form>
  );
}

export default function App() {
  // console.log("app renders, todoApp called");
  return (
    <div className="App2">
      <Header />
      <TodoApp />
    </div>
  );
}
