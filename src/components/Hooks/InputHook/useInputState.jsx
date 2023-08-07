import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const useTodos = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [todos, setTodos] = useState([]);
  const [editingTodoIndex, setEditingTodoIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [todoCount, setTodoCount] = useState(0);
  const [isTodosAdded, setIsTodosAdded] = useState(false);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleCheckboxChange = (index) => {
    const updatedCompletedTodos = completedTodos.includes(index)
      ? completedTodos.filter((id) => id !== index)
      : [...completedTodos, index];

    setCompletedTodos(updatedCompletedTodos);
  };

  const TodoAdded = () => {
    setIsTodosAdded(true);
  };

  const addTodo = () => {
    if (value.trim() !== "") {
      setTodos([...todos, value]);
      setValue("");
      setTodoCount(todoCount + 1);
      TodoAdded();
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    const updatedCompletedTodos = completedTodos.filter((id) => id !== index);
    const adjustedCompletedTodos = updatedCompletedTodos.map((id) =>
      id > index ? id - 1 : id
    );

    setTodos(newTodos);
    setCompletedTodos(adjustedCompletedTodos);

    if (editingTodoIndex === index) {
      setEditingTodoIndex(null);
      setEditedTodo("");
    } else if (editingTodoIndex > index) {
      setEditingTodoIndex(editingTodoIndex - 1);
    }

    setTodoCount(todoCount - 1);
  };

  const startEditing = (index) => {
    setEditingTodoIndex(index);
    setEditedTodo(todos[index]);
  };

  const cancelEditing = () => {
    setEditingTodoIndex(null);
    setEditedTodo("");
  };

  const saveEditedTodo = () => {
    if (editedTodo !== "") {
      const newTodos = [...todos];
      newTodos[editingTodoIndex] = editedTodo;
      setTodos(newTodos);
      setEditingTodoIndex(null);
      setEditedTodo("");
    }
  };

  const handleEditTodoChange = (event) => {
    setEditedTodo(event.target.value);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleReset = () => {
    setValue(initialValue);
  };

  return {
    isTodosAdded,
    value,
    todos,
    todoCount,
    editingTodoIndex,
    editedTodo,
    completedTodos,
    handleCheckboxChange,
    TodoAdded,
    reset: handleReset,
    handleEditTodoChange,
    onChange,
    addTodo,
    deleteTodo,
    startEditing,
    cancelEditing,
    saveEditedTodo,
  };
};

export default useTodos;
