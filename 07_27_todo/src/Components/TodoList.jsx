const TodoList = ({ todo, setTodo }) => {
  const todoListNode = todo.map(({ content }, index) => {
    return (
      <li key={`${content}-${index}`}>
        <span>{content}</span>
        <button
          onClick={() => {
            setTodo((prev) => {
              return [...prev.slice(0, index), ...prev.slice(index + 1)];
            });
          }}
        >
          delete
        </button>
      </li>
    );
  });

  return <ol>{todoListNode}</ol>;
};

export default TodoList;
