import "./App.css";

import { useState } from "react";

import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import todoLogo from "./components/icon/rocket.svg";
import TodoForm from "./components/TodoForm/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);

      // setTodoCount(todoCount + 1);
      // TodoAdded();
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={todoLogo} alt="" />
          <p className="leftLogoText">to</p> <p className="rightLogoText">do</p>
        </div>
      </div>
      <AddTodoForm addTodo={addTodo} todos={todos} />
      <TodoForm todos={todos} />
    </>
  );
};

export default App;
