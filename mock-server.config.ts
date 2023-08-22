import type { MockServerConfig } from "mock-config-server";

let todos = [
  { id: 1, name: "todo 1", checked: false },
  { id: 2, name: "todo 2", checked: false },
  { id: 3, name: "todo 3", checked: false },
];

// class TodoService{
//   constructor(baseUrl = 'http://localhost:31299/todos'){
//       this.baseUrl = baseUrl;
//   }
//   getTodo() {return fetch(`${this.baseUrl}`).then((res) => res.text())}
//   getTodos(id) {return fetch(`${this.baseUrl}/${id}`).then((res) => res.text())}
//   deleteTodo(id) {return fetch(`${this.baseUrl}/${id}`, {method: 'DELETE'}).then((res) => res.text())}
//   postTodos(body) {return fetch(`${this.baseUrl}`, {method: 'POST', headers: {
//    'Content-Type': 'application/json; charset=utf-8'},body: JSON.stringify(body)}).then((res) => res.json())}
//   putTodos = (id, body) => fetch(`${this.baseUrl}/${id}`, {method: 'PUT', headers: {'Content-Type': 'application/json; charset=utf-8'},body: JSON.stringify(body)}).then((res) => res.json())
// }

// const todoService = new TodoService();

const getTodos = () => {
  return () => todos;
};

const getTodoById = (todoId) => {
  return todos.find((todo) => todo.id === todoId);
};

const postTodo = (todo) => {
  return todos.push(todo);
};

const putTodo = (todoId, updatedTodo) => {
  todos = todos.map((todo) => {
    if (String(todo.id) === todoId)
      return {
        ...todo,
        ...updatedTodo,
      };
    return todo;
  });
};

const deleteTodo = (todoId) => {
  todos = todos.filter((todo) => todo.id !== todoId);
};

export const mockServerConfig: MockServerConfig = {
  rest: {
    configs: [
      {
        path: "/todos",
        method: "get",
        routes: [
          {
            data: getTodos(),
          },
        ],
      },
      {
        path: "/todos/:id",
        method: "get",
        routes: [
          {
            data: (context) => {
              const todoId = Number(context.params.id);
              const todo = getTodoById(todoId);

              if (todo) {
                return todo;
              } else {
                return { error: "Todo not found" };
              }
            },
          },
        ],
      },
      {
        path: "/todos",
        method: "post",
        routes: [{ data: { success: true } }],
        interceptors: {
          response: (data, { request }) => {
            const todo = request.body;
            postTodo(todo);
            return data;
          },
        },
      },
      {
        path: "/todos/:id",
        method: "put",
        routes: [
          {
            data: { success: true },
            interceptors: {
              response: (data, { request }) => {
                // const updatedTodo = request.body;
                // const todoId = Number(request.params.id);
                // const todoIndex = todos.findIndex((todo) => todo.id === todoId);

                // if (todoIndex !== -1) {
                //   todos[todoIndex] = updatedTodo;
                // }
                const updatedTodo = request.body;
                const todoId = Number(request.params.id);
                putTodo(String(todoId), updatedTodo);

                return { data: { success: true } };
              },
            },
          },
        ],
      },
      {
        path: "/todos/:id",
        method: "delete",
        routes: [
          {
            data: { success: true },
            interceptors: {
              response: (data, { request }) => {
                const todoId = Number(request.params.id);
                deleteTodo(todoId);
                return { data: { success: true } };
              },
            },
          },
        ],
      },
    ],
  },
};

export default mockServerConfig;
