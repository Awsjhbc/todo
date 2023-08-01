import todoLogo from "./components/icon/rocket.svg";
import "./App.css";

import TodoForm from "./components/TodoForm/TodoForm";

const App = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={todoLogo} alt="" />
          <p className="leftLogoText">to</p> <p className="rightLogoText">do</p>
        </div>
      </div>
      <TodoForm />
    </>
  );
};

export default App;
