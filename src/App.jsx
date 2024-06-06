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
import Footer from "./components/Footer";

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
    <div className="h-screen flex items-center justify-center flex-col ">
      <div
        className="card border-4 border-blue-400 shadow-lg shadow-slate-500"
        style={{ height: "512px" }}>
        <div className="card-body flex flex-col h-[90%]">
          <h3 className="text-3xl font-bold text-center mb-4">Todo</h3>
          <TodoForm handleAdd={handleAdd} />

          <div className="flex-grow overflow-y-auto mt-4">
            <TodoList
              todos={todos}
              handleStatus={handleStatus}
              handleDelete={handleDelete}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
