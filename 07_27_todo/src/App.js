import { useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

// // Title Component
// const TitleComponent = ({ title = "default" }) => {
//   document.title = title;
//   //return <div>{`${header}`}</div>;
// };

// // Header Component
// const HeaderComponent = ({ header = "default" }) => {
//   return <h1>{`${header}`}</h1>;
// };

// // Input Component
// const InputComponent = ({ setTodo }) => {
//   const [inputTodoValue, setInputTodoValue] = useState("");

//   const handleInput = () => {
//     setTodo((prev) => {
//       return [...prev, { content: inputTodoValue }];
//     });

//     setInputTodoValue("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputTodoValue}
//         onChange={(e) => setInputTodoValue(e.target.value)}
//       />
//       <button onClick={handleInput}>+</button>
//     </div>
//   );
// };

// const TodoCompoent = ({ todos }) => {
//   const todoNode = todos.map(({ content }, index) => {
//     return (
//       <div>
//         <li key={`${content}-${index}`}>{content}</li>
//         <button>delete</button>
//       </div>
//     );
//   });

//   return <ol>{todoNode}</ol>;
// };

function App() {
  // [] for empty array
  // {} for empty object
  // "" for empty string
  // only array can use map etc functions.
  // if you find map is not defined, check your initialized type
  const [todo, setTodo] = useState([]);

  console.log(todo);

  return (
    <div className="App">
      {/* <TitleComponent title="Todo List" />
      <HeaderComponent header="TODO LIST" /> */}
      <TodoInput setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
