/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";

import InputButton from "./InputButton/InputButton";

const TodoItem = ({ task, index, onDelete, TaskV }) => {
  return (
    <li key={index} className={styles.TaskItem}>
      {TaskV.editingTaskIndex === index ? (
        <>
          <input
            type="text"
            value={TaskV.editedTask || ""}
            onChange={TaskV.handleEditTaskChange}
          />

          <InputButton onClick={() => TaskV.saveEditedTask()}>Save</InputButton>
          <InputButton onClick={() => TaskV.cancelEditing()}>
            Cancel
          </InputButton>
        </>
      ) : (
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox_none} />
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
