import { useEffect } from "react";

export const fetchData = async (setTodos, setCompletedTodos) => {
  const response = await fetch("http://localhost:31299/todos");
  const data = await response.json();

  setTodos(data);

  const completed = data.filter((todo) => todo.checked);
  setCompletedTodos(completed);
};

export const fetchAddTodo = async (todo) => {
  const response = await fetch("http://localhost:31299/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
};

export const fetchDeleteTodo = async (id) => {
  const response = await fetch(`http://localhost:31299/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const fetchEditTodo = async (todo, updatedTodo) => {
  const response = await fetch(`http://localhost:31299/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });
};
