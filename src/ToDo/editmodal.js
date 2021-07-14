import { edit} from "./redux/slices/todoSlice";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";





const Edit = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const todoId = parseInt(pathname.replace("/edit/", ""), 10);

  const [new_title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (new_title, todoId) => {
    setData([new_title, todoId]);
    setTitle("");
    console.log(data);    
    dispatch(edit(["nimi",1]))
  };

  return (
    <form style={{ marginLeft: "10px" }} 
          onSubmit={(e) => {e.preventDefault();
          handleSubmit(new_title, todoId)}}>
      <br />
      <div>
        <input
          type="text"
          placeholder="Enter new title"
          value={new_title}
          onChange={(e) => setTitle(e.target.value)}
          // onDoubleClick={() => handleSubmit(new_title, todoId)}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <br />
        <Button type="submit" color="dark">
          {" "}
          Edit ToDo
        </Button>
      </div>
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <Link to={`/todo`} color="primary">
          <strong>Back to To-Do List</strong>
        </Link>
      </div>
    </form>
  );
};

export default Edit;
