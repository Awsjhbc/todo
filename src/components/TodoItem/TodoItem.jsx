/* eslint-disable react/prop-types */
import InputButton from "./InputButton/InputButton";
import styles from "./TodoItem.module.css";

const TodoItem = ({
  task,
  index,
  onDelete,
  TaskV,
  onCompleteChange,
  isCompleted,
}) => {
  return (
    <li key={index} className={styles.TodoItem}>
      {TaskV.editingTaskIndex === index ? (
        <>
          <input
            type="text"
            value={TaskV.editedTodo || ""}
            onChange={TaskV.handleEditTodoChange}
          />

          <InputButton onClick={() => TaskV.saveEditedTodo()}>Save</InputButton>
          <InputButton onClick={() => TaskV.cancelEditing()}>
            Cancel
          </InputButton>
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
            onChange={onCompleteChange}
          />
          <span className={styles.checkbox}></span>
          <div className={styles.task_buttons}>
            {task}
            <div className={styles.input_button}>
              <InputButton onClick={() => TaskV.startEditing(index)}>
                <span className={styles.pencil_icon}></span>
              </InputButton>
              <InputButton onClick={() => onDelete(index)}>
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
