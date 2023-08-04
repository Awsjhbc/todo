import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [taskCount, setTaskCount] = useState(0);
  const [isTasksAdded, setIsTasksAdded] = useState(false);

  const TaskAdded = () => {
    setIsTasksAdded(true);
  };

  const addTask = () => {
    if (value.trim() !== "") {
      setTasks([...tasks, value]);
      setValue("");
      setTaskCount(taskCount + 1);
      TaskAdded();
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setTaskCount(taskCount - 1);
  };

  const startEditing = (index) => {
    setEditingTaskIndex(index);
    setEditedTask(tasks[index]);
  };

  const cancelEditing = () => {
    setEditingTaskIndex(null);
    setEditedTask("");
  };

  const saveEditedTask = () => {
    if (editedTask !== "") {
      const newTasks = [...tasks];
      newTasks[editingTaskIndex] = editedTask;
      setTasks(newTasks);
      setEditingTaskIndex(null);
      setEditedTask("");
    }
  };

  const handleEditTaskChange = (event) => {
    setEditedTask(event.target.value);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleReset = () => {
    setValue(initialValue);
  };

  return {
    isTasksAdded,
    value,
    tasks,
    taskCount,
    editingTaskIndex,
    editedTask,
    TaskAdded,
    reset: handleReset,
    handleEditTaskChange,
    onChange,
    addTask,
    deleteTask,
    startEditing,
    cancelEditing,
    saveEditedTask,
  };
};

export default useInputState;
