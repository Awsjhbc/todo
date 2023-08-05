import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [taskCount, setTaskCount] = useState(0);
  const [isTasksAdded, setIsTasksAdded] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCheckboxChange = (index) => {
    const updatedCompletedTasks = completedTasks.includes(index)
      ? completedTasks.filter((id) => id !== index)
      : [...completedTasks, index];

    setCompletedTasks(updatedCompletedTasks);
  };

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

    const updatedCompletedTasks = completedTasks.filter((id) => id !== index);
    const adjustedCompletedTasks = updatedCompletedTasks.map((id) =>
      id > index ? id - 1 : id
    );

    setTasks(newTasks);
    setCompletedTasks(adjustedCompletedTasks);

    if (editingTaskIndex === index) {
      setEditingTaskIndex(null);
      setEditedTask("");
    } else if (editingTaskIndex > index) {
      setEditingTaskIndex(editingTaskIndex - 1);
    }

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
    completedTasks,
    handleCheckboxChange,
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
