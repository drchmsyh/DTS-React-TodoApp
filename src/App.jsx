/* eslint-disable */
import { useState } from "react";
import {
  changeTodoStatus,
  deleteTodo,
  getTodos,
  addTodo,
  sortTodos,
} from "./database/todos";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState(sortTodos());

  const handleStatus = (id) => {
    setTodos(changeTodoStatus(id));
  };

  const handleDelete = (id) => {
    setTodos(deleteTodo(id));
  };

  const handleAdd = (title) => {
    setTodos(addTodo(title));
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="card border-4 border-blue-400">
        <div className="card-body">
          <h3 className="text-3xl text-center mb-4">Todo</h3>

          <TodoForm handleAdd={handleAdd} />

          <TodoList
            todos={todos}
            handleStatus={handleStatus}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
