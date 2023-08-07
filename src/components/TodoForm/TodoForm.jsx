// UNUSED COMPONENT import EmptyPanel from "../EmptyPanel/EmptyPanel";

import MainTheme from "../EmptyPanel/MainTheme/MainTheme";
import useTodos from "../Hooks/InputHook/useInputState";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoForm.module.css";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ todos }) => {
  const TaskValue = useTodos("");

  return (
    <>
      {/* UNUSED COMPONENT <EmptyPanel TaskValueCounter={TaskValue.taskCount} /> */}
      <div className={styles.task_body}>
        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.created}>
              <p className={styles.created_text}>
                Created tasks {TaskValue.todoCount}
              </p>
            </div>
            <div>
              <p className={styles.completed_text}>
                Completed tasks {TaskValue.completedTodos.length}
              </p>
            </div>
          </div>
          <div className={styles.empty}>
            {TaskValue.isTodosAdded ? (
              <TodoList
                TaskV={TaskValue}
                todos={todos}
                onDelete={TaskValue.deleteTodo}
              />
            ) : (
              <MainTheme />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
