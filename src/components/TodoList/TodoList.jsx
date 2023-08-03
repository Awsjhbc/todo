/* eslint-disable react/prop-types */

import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = ({ TaskL, onDelete }) => {
  return (
    <ul className={styles.TaskList}>
      {TaskL.map((task, index) => (
        <TodoItem task={task} key={index} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
