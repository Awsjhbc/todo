import todoLogo from "./components/icon/rocket.svg";
import './App.css';

import TodoForm from './components/TodoForm/TodoForm';


import useTodoState from './components/Hooks/TodoHook/useTodoState';

const App = () => {

  const {todos, addTodo, deleteTodo} = useTodoState([]);

  return (
    <>
    <div className="header">
        <div className="logo">
          <img src={todoLogo} alt="" />
          <p className="leftLogoText">to</p> <p className="rightLogoText">do</p>
        </div>
      </div>
      <TodoForm saveTodo={todoText => {
        const trimmedText=todoText.trim();
        if (trimmedText.length > 0) {
          addTodo([trimmedText]);
        }
      }} 
      todos={todos} 
      deleteTodo={deleteTodo}
      />
    </>
  )
}

export default App
