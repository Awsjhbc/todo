/* eslint-disable react/prop-types */
import { useState } from "react";

import InputButton from "./InputButton/InputButton";
import styles from "./TodoItem.module.css";

const TodoItem = ({
  todo,
  index,
  deleteTodo,
  todos,
  setTodos,
  handleCheckboxChange,
  isCompleted,
}) => {
  const [editingTodoIndex, setEditingTodoIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");

  const startEditing = (index) => {
    setEditingTodoIndex(index);
    setEditedTodo(todos[index]);
  };

  const cancelEditing = () => {
    setEditingTodoIndex(null);
    setEditedTodo("");
  };

  const saveEditedTodo = () => {
    if (editedTodo !== "") {
      const newTodos = [...todos];
      newTodos[editingTodoIndex] = editedTodo;
      setTodos(newTodos);
      setEditingTodoIndex(null);
      setEditedTodo("");
    }
  };

  const handleEditTodoChange = (event) => {
    setEditedTodo(event.target.value);
  };

  return (
    <li key={index} className={styles.TodoItem}>
      {editingTodoIndex === index ? (
        <>
          <input
            type="text"
            value={editedTodo || ""}
            onChange={handleEditTodoChange}
          />

          <InputButton onClick={() => saveEditedTodo()}>Save</InputButton>
          <InputButton onClick={() => cancelEditing()}>Cancel</InputButton>
        </>
      ) : (
        <label
          className={`${styles.label} ${
            isCompleted ? styles["completed"] : ""
          }`}
        >
          <input
            type="checkbox"
            className={styles.checkbox_none}
            checked={isCompleted} // Отмечаем выполненные задачи
            onChange={handleCheckboxChange(index)}
          />
          <span className={styles.checkbox}></span>
          <div className={styles.task_buttons}>
            {todo}
            <div className={styles.input_button}>
              <InputButton onClick={() => startEditing(index)}>
                <span className={styles.pencil_icon}></span>
              </InputButton>
              <InputButton onClick={() => deleteTodo(index)}>
                <span className={styles.trash_icon}></span>
              </InputButton>
            </div>
          </div>
        </label>
      )}
    </li>
  );
};

export default TodoItem;
