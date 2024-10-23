import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const contextTodo = createContext();

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);

  let addTodo = () => {
    let newTodo = {
      id: Date.now(),
      task: task,
      status: status,
    };
    setTodo([...todo, newTodo]);
    setTask("");
  };

  let handleChange = (e) => {
    setTask(e.target.value);
  };

  let handleDelete = (id) => {
    let dataafterdeletion = todo.filter((item) => {
      return item.id !== id;
    });
    setTodo(dataafterdeletion);
  };

  let handleToggleStatus = (id) => {
    let x = todo.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
    setTodo(x);
  };

  return (
    <contextTodo.Provider
      value={{
        todo,
        addTodo,
        task,
        handleChange,
        handleToggleStatus,
        handleDelete
      }}
    >
      {children}
    </contextTodo.Provider>
  );
};

export default TodoProvider;
