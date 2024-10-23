import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);

  const handleAddTodo = () => {
    let newTask = {
      id: Date.now(),
      task: task,
      status: status,
    };
    setData([...data, newTask]);
    console.log(task);
    setTask("");
  };

  const handleDelete = (id) => {
    let FilterAfterDeleteTask = data.filter((item) => {
      return item.id !== id;
    });
    setData(FilterAfterDeleteTask);
  };

  const handleChangeStaus = (id) => {
    let ChangeStatus = data.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
    setData(ChangeStatus);
  };

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      {data.map((item) => (
        <div key={item.id}>
          <div style={{ display: "flex", gap: "15px" }}>
            <input
              type="checkbox"
              onClick={() => handleChangeStaus(item.id)}
              checked={item.status === true ? true : false}
            />
            <p>{item.task}</p>
            <p>{item.status === true ? "Completed" : "Not Completed!"}</p>
            <button onClick={() => handleChangeStaus(item.id)}>
              Update Status
            </button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
