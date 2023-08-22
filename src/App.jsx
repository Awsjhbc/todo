import { useState } from "react";

import styles from "./App.module.css";
import rocketLogo from "./assets/rocketLogo.svg";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";
import MainTheme from "./MainTheme/MainTheme";

const DEFAULT_TODO_LIST = [
  { id: 1, name: "todo 1", checked: false },
  { id: 2, name: "todo 2", checked: false },
  { id: 3, name: "todo 3", checked: false },
];

const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isTodosAdded, setIsTodosAdded] = useState(true);
  const [todoCount, setTodoCount] = useState(0);

  const TodoAdded = () => {
    setIsTodosAdded(true);
  };

  const addTodo = (todo) => {
    if (todo.trim() !== "") {
      const newTodo = { id: todos.length + 1, name: todo, checked: false };
      setTodos([...todos, newTodo]);

      setTodoCount(todoCount + 1);
      TodoAdded();
    }
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);

    const updatedCompletedTodos = updatedTodos
      .filter((todo) => todo.checked)
      .map((todo) => todo.id);
    setCompletedTodos(updatedCompletedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    const updatedCompletedTodos = completedTodos.filter(
      (completedId) => completedId !== id
    );

    setCompletedTodos(updatedCompletedTodos);
    setTodoCount(todoCount - 1);
  };
  // console.log(todos);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={rocketLogo} alt="" />
          <p className={styles.leftLogoText}>to</p>{" "}
          <p className={styles.rightLogoText}>do</p>
        </div>
      </div>
      <AddTodoForm addTodo={addTodo} />
      {isTodosAdded ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          setTodos={setTodos}
          handleCheckboxChange={handleCheckboxChange}
          isCompleted={completedTodos}
        />
      ) : (
        <div className={styles.empty}>
          <MainTheme />
        </div>
      )}
    </>
  );
};

export default App;
