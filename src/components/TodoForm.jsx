import { useState } from "react";

/* eslint-disable */
const TodoForm = ({ handleAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(title);
    setTitle("");
  };

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form
      className="flex border-solid border-2 border-blue-400 p-2 rounded-xl m-1 min-w-96"
      onSubmit={(e) => {
        handleSubmit(e);
      }}>
      <input
        required
        type="text"
        placeholder="Add Todo"
        className="input border-2 input-bordered input-accent w-full max-w-xs"
        value={title}
        onChange={(e) => handleInput(e)}
      />
      <button className="btn btn-accent ml-2">Add</button>
    </form>
  );
};

export default TodoForm;
