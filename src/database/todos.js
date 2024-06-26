/* eslint-disable */
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
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
};

const setTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const sortTodos = () => {
  return getTodos().sort((a, b) => a.completed - b.completed || b.id - a.id);
};

const changeTodoStatus = (id) => {
  setTodos(
    getTodos().map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })
  );
  return sortTodos();
};

const deleteTodo = (id) => {
  setTodos(getTodos().filter((todo) => todo.id !== id));

  return sortTodos();
};

const addTodo = (title) => {
  setTodos(
    getTodos().concat([
      {
        id:
          getTodos().length > 0 ? getTodos()[getTodos().length - 1].id + 1 : 1,
        title,
        completed: false,
      },
    ])
  );

  console.log(getTodos()[getTodos().length - 1].id);

  return sortTodos();
};

export { getTodos, changeTodoStatus, deleteTodo, addTodo, sortTodos };
