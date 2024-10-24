import { addTodo, deleteTodo, toggleTodo } from "./type";

let allTask = {
  todo: [],
};

export const reducer = (state = allTask, { type, payload }) => {
  switch (type) {
    case addTodo: {
      return {
        todo: [...state.todo, payload],
      };
    }

    case deleteTodo: {
      return {
        todo: payload,
      };
    }
    case toggleTodo: {
      return {
        todo: payload,
      };
    }
    default: {
      return state;
    }
  }
};
