import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, deleteTododata, toggleTododata } from "../redux/action";

const Todo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);

  const todo = useSelector((task) => task.todo);
  console.log("todo", todo);

  const handleAdd = () => {
    let newTask = {
      id: Date.now(),
      text: text,
      status: status,
    };
    dispatch(addNewTodo(newTask));
    setText("");
  };

  const handleDelte = (id) => {
    let x = todo.filter((el) => {
      return el.id !== id;
    });
    dispatch(deleteTododata(x));
  };

  const handleToggle = (id) => {
    let y = todo.map((el) => {
      return el.id == id ? { ...el, status: !el.status } : el;
    });
    dispatch(toggleTododata(y));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      {todo.map((el) => (
        <div
          key={el.id}
          style={{ display: "flex", gap: "6px", justifyContent: "center" }}
        >
          <p>{el.text}</p>
          <p>{el.status === true ? "Completed" : "Not Completed"}</p>
          <button onClick={() => handleToggle(el.id)}>Toggle</button>
          <button onClick={() => handleDelte(el.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
