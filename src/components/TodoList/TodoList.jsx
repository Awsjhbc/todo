/* eslint-disable react/prop-types */
import useInputState from "../Hooks/InputHook/useInputState";
import Button from "../button/button";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const TaskValue = useInputState("");
  return (
    <ul className={styles.TaskList}>
      {TaskValue.tasks.map((task, index) => (
        <li key={index} className={styles.TaskItem}>
          {TaskValue.editingTaskIndex === index ? (
            <>
              <input
                type="text"
                value={TaskValue.editedTask}
                onChange={TaskValue.handleEditTaskChange}
                className={styles.checkbox_none}
              />
              <span className={styles.checkbox}></span>

              <Button onClick={TaskValue.saveEditedTask}>Сохранить</Button>
              <Button onClick={TaskValue.cancelEditing}>Отмена</Button>
            </>
          ) : (
            <>
              <label className={styles.label}>
                {task}
                <Button onClick={() => TaskValue.startEditing(index)}>
                  Редактировать
                </Button>
                <Button onClick={() => TaskValue.deleteTask(index)}>
                  <span className={styles.trash_icon}></span>
                </Button>
              </label>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
