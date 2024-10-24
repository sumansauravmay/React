import { addTodo, deleteTodo, toggleTodo } from "./type";

export const addNewTodo = (payload) => {
  return { type: addTodo, payload };
};

export const deleteTododata = (payload) => {
  return { type: deleteTodo, payload };
};

export const toggleTododata = (payload) => {
  return { type: toggleTodo, payload };
};
