/* eslint-disable */
const TodoItem = ({ todo, handleStatus, handleDelete }) => {
  return (
    <div className="flex border-solid border-2 border-blue-400 p-2 rounded-xl m-1 min-w-96">
      <p
        className="select-none cursor-pointer"
        onClick={() => handleStatus(todo.id)}>
        {todo.completed ? (
          <>
            ☑️ <del>{todo.title}</del>
          </>
        ) : (
          <>⬜ {todo.title}</>
        )}
      </p>
      <span
        className="cursor-pointer bg-pink-400 pl-2 pr-2 ml-2"
        onClick={() => handleDelete(todo.id)}>
        X
      </span>
    </div>
  );
};

export default TodoItem;
