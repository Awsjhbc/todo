/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem/TodoItem";
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
      <div className={styles.todo_body}>
        <div className={styles.todos}>
          <div className={styles.info}>
            <div className={styles.created}>
              <p className={styles.created_text}>
                Created tasks {todos.length}
              </p>
            </div>
            <div>
              <p className={styles.completed_text}>
                Completed tasks {isCompleted.length}
              </p>
            </div>
          </div>
          <div className={styles.empty}>
            <ul className={styles.TodoList}>
              {todos.map((todo, id) => (
                <li key={id}>
                  <TodoItem
                    todo={todo}
                    deleteTodo={() => deleteTodo(todo.id)}
                    setTodos={setTodos}
                    handleCheckboxChange={() => handleCheckboxChange(todo.id)}
                    isCompleted={isCompleted.includes(todo.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
