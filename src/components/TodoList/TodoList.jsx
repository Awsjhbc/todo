/* eslint-disable react/prop-types */
import useInputState from "../Hooks/InputHook/useInputState";


const TodoList = () => {
  const { tasks, removeTask } = useInputState('');
return (
  <ul>
  {tasks.map((task, index) => (
    <li key={index}>
      {task}
      <button onClick={() => removeTask(index)}>Удалить</button>
    </li>
  ))}
</ul>
)
};

export default TodoList;