import { useEffect, useState } from "react";

import styles from "./App.module.css";
import rocketLogo from "./assets/rocketLogo.svg";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";
import MainTheme from "./MainTheme/MainTheme";
import {
  fetchAddTodo,
  fetchData,
  fetchDeleteTodo,
  fetchEditTodo,
} from "./utils/Requests";

// const DEFAULT_TODO_LIST = [
//   { id: 1, name: "todo 1", checked: false },
//   { id: 2, name: "todo 2", checked: false },
//   { id: 3, name: "todo 3", checked: false },
// ];

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");

  // isloading

  useEffect(() => {
    const handleFetchData = async () => {
      await fetchData(setTodos, setCompletedTodos);
    };
    return handleFetchData;
  }, []);

  const addTodo = async (todo) => {
    await fetchAddTodo(todo);
    setTodos([...todos, todo]);
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

  const deleteTodo = async (id) => {
    await fetchDeleteTodo(id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const saveEditedTodo = async (todo) => {
    if (editedTodo.trim()) {
      const updatedTodo = { ...todo, name: editedTodo };
      await fetchEditTodo(todo, updatedTodo);
      setTodos((todos) => {
        const newTodos = todos.map((t) =>
          t.id === todo.id ? { ...t, name: editedTodo } : t
        );
        return newTodos;
      });

      setIsEditing(false);
    }
  };

  const handleEditTodoChange = (event) => {
    setEditedTodo(event.target.value);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={rocketLogo} alt="" />
          <p className={styles.leftLogoText}>to</p>{" "}
          <p className={styles.rightLogoText}>do</p>
        </div>
      </div>
      <AddTodoForm addTodo={addTodo} todos={todos} />
      {todos.length ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          handleCheckboxChange={handleCheckboxChange}
          isCompleted={completedTodos}
          isEditing={isEditing}
          cancelEditing={cancelEditing}
          saveEditedTodo={saveEditedTodo}
          handleEditTodoChange={handleEditTodoChange}
          editedTodo={editedTodo}
          setIsEditing={setIsEditing}
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
