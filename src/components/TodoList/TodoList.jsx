/* eslint-disable react/prop-types */

import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = ({ TaskL }) => {
  return (
    <ul className={styles.TaskList}>
      {TaskL.map((task, index) => (
        <TodoItem task={task} key={index} />
      ))}
    </ul>
  );
};

export default TodoList;
