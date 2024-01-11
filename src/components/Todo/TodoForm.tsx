import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);

  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isComplete: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>add Todo</h2>
      <input
        onBlur={(e) => setTask(e.target.value)}
        className="border m-5 border-purple-300"
        name="todo"
        id="todo"
        type="text"
        placeholder="add Todo"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
