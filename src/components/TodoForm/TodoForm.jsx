import useInputState from "../Hooks/InputHook/useInputState";
// UNUSED COMPONENT import EmptyPanel from "../EmptyPanel/EmptyPanel";
import InputForm from "../Input/Input";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoForm.module.css";
import MainTheme from "../EmptyPanel/MainTheme/MainTheme";

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
      <InputForm
        value={TaskValue.value}
        onChange={TaskValue.onChange}
        onAddTask={TaskValue.addTask}
      />
      {/* UNUSED COMPONENT <EmptyPanel TaskValueCounter={TaskValue.taskCount} /> */}
      <div className={styles.task_body}>
        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.created}>
              <p className={styles.created_text}>
                Created tasks {TaskValue.taskCount}
              </p>
            </div>
            <div>
              <p className={styles.completed_text}>Completed tasks 0</p>
            </div>
          </div>
          <div className={styles.empty}>
            {TaskValue.isTasksAdded ? (
              <TodoList TaskL={TaskValue.tasks} />
            ) : (
              <MainTheme />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
