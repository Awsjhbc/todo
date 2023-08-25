import { useEffect, useState } from "react";
import { createContext } from "react";

import styles from "./App.module.css";
import rocketLogo from "./assets/rocketLogo.svg";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import { LoadingSpinner } from "./components/Loading/Loading";
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

export const MyContext = createContext();

const App = () => {
  const [todos, setTodos] = useState([]);
  // переделать комплитед

  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleFetchData = async () => {
      const data = await fetchData();

      setTodos(data);

      setIsLoading(false);
    };
    return handleFetchData;
  }, []);

  const addTodo = async (name) => {
    const todo = {
      id: todos.length + 1,
      name: name,
      checked: false,
    };
    await fetchAddTodo(todo);
    setTodos([...todos, todo]);
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
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
    <div className={styles.appTest}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={rocketLogo} alt="" />
          <p className={styles.leftLogoText}>to</p>{" "}
          <p className={styles.rightLogoText}>do</p>
        </div>
      </div>
      <MyContext.Provider
        value={{
          deleteTodo,
          handleCheckboxChange,

          isEditing,
          cancelEditing,
          saveEditedTodo,
          handleEditTodoChange,
          editedTodo,
          setIsEditing,
          addTodo,
          todos,
        }}
      >
        <AddTodoForm />

        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <>
            {todos.length ? (
              <TodoList />
            ) : (
              <div className={styles.empty}>
                <MainTheme />
              </div>
            )}
          </>
        )}
      </MyContext.Provider>
    </div>
  );
};

export default App;
