/* eslint-disable react/prop-types */

import { useContext } from "react";

import MyContext from "../../utils/MyContext";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

// eslint-disable-next-line react/prop-types
const TodoList = () => {
  const {
    todos,
    deleteTodo,
    handleCheckboxChange,
    isEditing,
    cancelEditing,
    saveEditedTodo,
    handleEditTodoChange,
    editedTodo,
    setIsEditing,
  } = useContext(MyContext);
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
                Completed tasks {todos.filter((todo) => todo.checked).length}
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
                    handleCheckboxChange={() => handleCheckboxChange(todo.id)}
                    isCompleted={todo.checked}
                    isEditing={isEditing}
                    cancelEditing={cancelEditing}
                    saveEditedTodo={saveEditedTodo}
                    handleEditTodoChange={handleEditTodoChange}
                    editedTodo={editedTodo}
                    setIsEditing={setIsEditing}
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
