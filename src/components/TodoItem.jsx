/* eslint-disable */
const TodoItem = ({ todo }) => {
  return (
    <div className="flex border-solid border-2 border-blue-400 p-2 rounded-xl m-1 min-w-96">
      <p className="select-none cursor-pointer">
        {todo.completed ? (
          <>
            ☑️ <del>{todo.title}</del>
          </>
        ) : (
          <>⬜ {todo.title}</>
        )}
      </p>
    </div>
  );
};

export default TodoItem;