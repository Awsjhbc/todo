/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";
import useInputState from "../Hooks/InputHook/useInputState";
import Button from "../button/button";

const TodoItem = ({ task, index }) => {
  const TaskValue = useInputState("");

  return (
    <li key={index} className={styles.TaskItem}>
      {TaskValue.editingTaskIndex === index ? (
        <>
          <input
            type="text"
            value={TaskValue.editedTask}
            onChange={TaskValue.handleEditTaskChange}
          />

          <Button onClick={TaskValue.saveEditedTask}>Сохранить</Button>
          <Button onClick={TaskValue.cancelEditing}>Отмена</Button>
        </>
      ) : (
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox_none} />
          <span className={styles.checkbox}></span>
          {task}
          <Button onClick={() => TaskValue.startEditing(index)}>
            Редактировать
          </Button>
          <Button onClick={() => TaskValue.deleteTask(index)}>
            <span className={styles.trash_icon}></span>
          </Button>
        </label>
      )}
    </li>
  );
};

export default TodoItem;
