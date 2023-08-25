/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import plusIcon from "../../assets/plusIcon.svg";
import MyContext from "../../utils/MyContext";
import styles from "./AddTodoForm.module.css";
import Button from "./Button/Button";

const DEFAULT_INPUT_VALUE = "";

const AddTodoForm = () => {
  const [value, setValue] = useState(DEFAULT_INPUT_VALUE);

  const { addTodo } = useContext(MyContext);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTodo(value);
    setValue(DEFAULT_INPUT_VALUE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.input}>
        <div className={styles.createTodo}>
          <input
            name="description"
            type="text"
            className={styles.input}
            placeholder="Create new todo"
            value={value}
            onChange={onChange}
          />
          <Button type="submit">
            Create{" "}
            <span className={styles.span_icon}>
              <img src={plusIcon} alt="" />
            </span>{" "}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
