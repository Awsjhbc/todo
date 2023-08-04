/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";

import Button from "../button/button";

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

          <Button onClick={() => TaskV.saveEditedTask()}>Сохранить</Button>
          <Button onClick={() => TaskV.cancelEditing()}>Отмена</Button>
        </>
      ) : (
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox_none} />
          <span className={styles.checkbox}></span>
          {task}
          <Button onClick={() => TaskV.startEditing(index)}>
            Редактировать
          </Button>
          <Button onClick={() => onDelete(index)}>
            <span className={styles.trash_icon}></span>
          </Button>
        </label>
      )}
    </li>
  );
};

export default TodoItem;
