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
      id: 1,
      task: task,
      status: status,
    };
    setTodo([...todo, newTodo])
  };

  return <contextTodo.Provider value={{todo, addTodo}}>{children}</contextTodo.Provider>;
};

export default TodoProvider;
