import React from "react";
import { useContext } from "react";
import { contextTodo } from "./TodoProvider";

const TodoItem = () => {
  const { todo, handleToggleStatus, handleDelete } = useContext(contextTodo);
  console.log(todo);
  console.log("render");

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "6px" }}>
          <input
            type="checkbox"
            onClick={() => handleToggleStatus(item.id)}
            checked={item.status}
          />
          <h5>{item.task}</h5>
          <h5>{item.status === true ? "Completed" : "Not Completed"}</h5>
          <button onClick={() => handleToggleStatus(item.id)}>
            Toggle Status
          </button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
