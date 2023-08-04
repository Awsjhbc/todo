/* eslint-disable react/prop-types */

import TodoItem from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = ({ TaskL, onDelete, TaskV }) => {
  return (
    <ul className={styles.TaskList}>
      {TaskL.map((task, index) => (
        <TodoItem
          task={task}
          key={index}
          index={index}
          onDelete={onDelete}
          TaskV={TaskV}
        />
      ))}
    </ul>
  );
};

export default TodoList;
