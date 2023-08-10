/* eslint-disable react/prop-types */
// UNUSED COMPONENT import EmptyPanel from "../EmptyPanel/EmptyPanel";

import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

// eslint-disable-next-line react/prop-types
const TodoList = ({
  todos,
  deleteTodo,
  setTodos,
  handleCheckboxChange,
  isCompleted,
}) => {
  return (
    <>
      {/* UNUSED COMPONENT <EmptyPanel TaskValueCounter={TaskValue.taskCount} /> */}
      <div className={styles.task_body}>
        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.created}>
              <p className={styles.created_text}>
                {/* Created tasks {TaskValue.todoCount} */}
              </p>
            </div>
            <div>
              <p className={styles.completed_text}>
                {/* Completed tasks {TaskValue.completedTodos.length} */}
              </p>
            </div>
          </div>
          <div className={styles.empty}>
            <ul className={styles.TaskList}>
              {todos.map((todo, index) => (
                <TodoItem
                  todo={todo}
                  key={index}
                  index={index}
                  deleteTodo={deleteTodo}
                  setTodos={setTodos}
                  handleCheckboxChange={handleCheckboxChange}
                  isCompleted={isCompleted}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
