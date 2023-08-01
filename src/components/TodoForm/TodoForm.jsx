import Button from "../button/button";
import Plus from "../icon/plus.svg";
import styles from "./TodoForm.module.css";

import useInputState from "../Hooks/InputHook/useInputState";
import EmptyPanel from "../EmptyPanel/EmptyPanel";
import InputForm from "../Input/Input";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ saveTodo }) => {
  const TaskValue = useInputState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        saveTodo(TaskValue.value);
        TaskValue.reset();
      }}
    >
      {/* <InputForm /> */}
      <div className={styles.input}>
        <div className="createTask">
          <input
            name="description"
            type="textarea"
            className="input"
            placeholder="Create new task"
            value={TaskValue.value}
            onChange={TaskValue.onChange}
          />

          <Button onClick={TaskValue.addTask} className={styles.button}>
            Create{" "}
            <span className={styles.span_icon}>
              <img src={Plus} alt="" />
            </span>{" "}
          </Button>
        </div>
      </div>
      <EmptyPanel TaskValueCounter={TaskValue.taskCount} />
      <ul className={styles.TaskList}>
        {TaskValue.tasks.map((task, index) => (
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
              <>
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
              </>
            )}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default TodoForm;
