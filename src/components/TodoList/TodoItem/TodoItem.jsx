/* eslint-disable react/prop-types */
import classNames from "classnames";
import { useState } from "react";

import styles from "./TodoItem.module.css";
import InputButton from "./TodoItemButton/InputButton";

const TodoItem = ({
  todo,
  deleteTodo,
  setTodos,
  handleCheckboxChange,
  isCompleted,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.name);

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const saveEditedTodo = () => {
    if (editedTodo.trim() !== "") {
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
    <div className={styles.TodoItem}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTodo}
            onChange={handleEditTodoChange}
          />
          <InputButton onClick={() => saveEditedTodo(todo, todo.id)}>
            Save
          </InputButton>
          <InputButton onClick={() => cancelEditing()}>Cancel</InputButton>
        </>
      ) : (
        <label
          className={classNames(styles.label, {
            [styles.completed]: isCompleted,
          })}
        >
          <input
            type="checkbox"
            className={styles.checkbox_none}
            checked={isCompleted} // Отмечаем выполненные задачи
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <span className={styles.checkbox}></span>
          <div className={styles.todo_buttons}>
            {todo.name}
            <div className={styles.input_button}>
              <InputButton onClick={() => setIsEditing(true)}>
                <span className={styles.pencil_icon}></span>
              </InputButton>
              <InputButton onClick={() => deleteTodo(todo.id)}>
                <span className={styles.trash_icon}></span>
              </InputButton>
            </div>
          </div>
        </label>
      )}
    </div>
  );
};

export default TodoItem;
