/* eslint-disable */
const TodoItem = ({ todo, handleStatus, handleDelete }) => {
  return (
    <div className="flex border-solid border-2 border-blue-400 p-2 rounded-xl m-2 mt-3 min-w-96">
      <p
        className="select-none cursor-pointer"
        onClick={() => handleStatus(todo.id)}>
        {todo.completed ? (
          <div className="flex justify-between">
            <div>
              ☑️ <del className="">{todo.title}</del>
            </div>
            <span className="badge badge-success ">Done</span>
          </div>
        ) : (
          <>⬜ {todo.title}</>
        )}
      </p>
      <span
        className="cursor-pointer  pl-1 pr-2 ml-2"
        onClick={() => handleDelete(todo.id)}>
        ❌
      </span>
    </div>
  );
};

export default TodoItem;
