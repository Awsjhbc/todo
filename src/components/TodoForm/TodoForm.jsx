
import Button from "../button/button";
import Plus from "../icon/plus.svg";
import styles from "./TodoForm.module.css";


import useInputState from "../Hooks/InputHook/useInputState";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ saveTodo }) => {
  const TaskValue = useInputState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(TaskValue.value);
        TaskValue.reset();
      }}
    >
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
      <ul>
       {TaskValue.tasks.map((task, index) => (
        <li key={index}>
        {TaskValue.editingTaskIndex === index ? (
          <>
            <input type="text" value={TaskValue.editedTask} onChange={TaskValue.handleEditTaskChange} />
            <Button onClick={TaskValue.saveEditedTask}>Сохранить</Button>
            <Button onClick={TaskValue.cancelEditing}>Отмена</Button>
          </>
        ) : (
          <>
            {task}
            <Button onClick={() => TaskValue.startEditing(index)}>Редактировать</Button>
            <Button onClick={() => TaskValue.deleteTask(index)}>Удалить</Button>
          </>
        )}
      </li>
     ))}
      </ul>
    </form>
    
  );
};

export default TodoForm;
