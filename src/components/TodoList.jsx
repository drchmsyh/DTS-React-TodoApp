/* eslint-disable */
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleStatus, handleDelete }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleStatus={handleStatus}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
};

export default TodoList;
