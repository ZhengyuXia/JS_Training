import { useState } from "react";

const TodoInput = ({ setTodo }) => {
  const [input, setInput] = useState("");

  const obtainContent = () => {
    setTodo((prev) => {
      return [...prev, { content: input }];
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={obtainContent}>submit</button>
    </div>
  );
};

export default TodoInput;
