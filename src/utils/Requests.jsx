export const fetchData = async () =>
  await fetch("http://localhost:31299/todos").then((res) => res.json());

export const fetchAddTodo = async (todo) => {
  const response = await fetch("http://localhost:31299/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return response;
};

export const fetchDeleteTodo = async (id) => {
  const response = await fetch(`http://localhost:31299/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};

export const fetchEditTodo = async (todo, updatedTodo) => {
  const response = await fetch(`http://localhost:31299/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });
  return response;
};

export const fetchLoading = async () => {
  const response = await fetch("http://localhost:31299/todos").then(
    (response) => response.json()
  );
  // .then((response) => {

  //    // Optional code to simulate delay
  //    // setTimeout(() => {
  //    //   setUsers(respose.data);
  //    //   setIsLoading(false);
  //    // }, 3000);
  // })
  return response;
};
