import "./App.css";

import { useState } from "react";

import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import MainTheme from "./components/EmptyPanel/MainTheme/MainTheme";
import todoLogo from "./components/icon/rocket.svg";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isTodosAdded, setIsTodosAdded] = useState(false);

  const TodoAdded = () => {
    setIsTodosAdded(true);
  };

  const addTodo = (todo) => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);

      // setTodoCount(todoCount + 1);
      TodoAdded();
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedCompletedTodos = completedTodos.includes(index)
      ? completedTodos.filter((id) => id !== index)
      : [...completedTodos, index];

    setCompletedTodos(updatedCompletedTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    const updatedCompletedTodos = completedTodos.filter((id) => id !== index);
    const adjustedCompletedTodos = updatedCompletedTodos.map((id) =>
      id > index ? id - 1 : id
    );

    setTodos(newTodos);
    setCompletedTodos(adjustedCompletedTodos);

    // setTodoCount(todoCount - 1);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={todoLogo} alt="" />
          <p className="leftLogoText">to</p> <p className="rightLogoText">do</p>
        </div>
      </div>
      <AddTodoForm addTodo={addTodo} />
      {/* {isTodosAdded ? ( */}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        setTodos={setTodos}
        handleCheckboxChange={() => handleCheckboxChange}
        isCompleted={completedTodos}
      />
      {/* ) : (
        <MainTheme />
      )} */}
    </>
  );
};

export default App;
