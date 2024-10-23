import React from "react";
import { useContext } from "react";
import { contextTodo } from "./TodoProvider";

const Todo = () => {
  const {addTodo, task, handleChange } = useContext(contextTodo);

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Todo;
