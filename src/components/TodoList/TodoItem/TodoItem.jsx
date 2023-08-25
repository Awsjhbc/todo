/* eslint-disable react/prop-types */
import classNames from "classnames";

import styles from "./TodoItem.module.css";
import InputButton from "./TodoItemButton/InputButton";

const TodoItem = ({
  todo,
  deleteTodo,
  handleCheckboxChange,
  isCompleted,
  isEditing,
  cancelEditing,
  saveEditedTodo,
  handleEditTodoChange,
  editedTodo,
  setIsEditing,
}) => {
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
            checked={isCompleted}
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
