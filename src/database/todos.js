let todos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: true,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
];

const getTodos = () => {
  return todos;
};

const changeTodoStatus = (id) => {
  return todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }

    return todo;
  });
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);

  return todos;
};

const addTodo = (title) => {
  todos = todos.concat([
    {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      title,
      completed: false,
    },
  ]);

  return todos;
};

export { getTodos, changeTodoStatus, deleteTodo, addTodo };
