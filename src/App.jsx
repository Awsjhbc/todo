import "./App.css";

import { useState } from "react";

import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import todoLogo from "./components/icon/rocket.svg";
import TodoForm from "./components/TodoForm/TodoForm";

const DEFAULT_INPUT_VALUE = "";

const App = () => {
  const [value, setValue] = useState(DEFAULT_INPUT_VALUE);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (value.trim() !== "") {
      setTodos([...todos, value]);
      setValue("");
      // setTodoCount(todoCount + 1);
      // TodoAdded();
    }
  };

  const onSubmit = () => {
    addTodo(value);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(value);
    setValue(DEFAULT_INPUT_VALUE);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={todoLogo} alt="" />
          <p className="leftLogoText">to</p> <p className="rightLogoText">do</p>
        </div>
      </div>
      <AddTodoForm
        value={value}
        addTodo={addTodo}
        handleSubmit={handleSubmit}
        onChange={onChange}
      />
      <TodoForm />
    </>
  );
};

export default App;
