/* eslint-disable react/prop-types */

import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, onDelete, TaskV }) => {
  return (
    <ul className={styles.TaskList}>
      {todos.map((task, index) => (
        <TodoItem
          task={task}
          key={index}
          index={index}
          onDelete={onDelete}
          TaskV={TaskV}
          onCompleteChange={() => TaskV.handleCheckboxChange(index)}
          isCompleted={TaskV.completedTasks.includes(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
