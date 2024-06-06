/* eslint-disable */
import { useState } from "react";
import { getTodos } from "./database/todos";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(getTodos());

  return (
    <div className="h-screen  flex items-center justify-center flex-col">
      <div className="card border-4 border-blue-400">
        <div className="card-body">
          <h3 className="text-3xl text-center mb-4">Todo</h3>
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
