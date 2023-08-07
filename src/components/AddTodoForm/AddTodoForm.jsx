/* eslint-disable react/prop-types */
import { useState } from "react";

import Plus from "../../assets/plus.svg";
import Button from "../Button/Button";
import styles from "./AddTodoForm.module.css";

const DEFAULT_INPUT_VALUE = "";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(DEFAULT_INPUT_VALUE);

  const onSubmit = (value) => {
    addTodo(value);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(value);
    setValue(DEFAULT_INPUT_VALUE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.input}>
        <div className="createTask">
          <input
            name="description"
            type="text"
            className="input"
            placeholder="Create new task"
            value={value}
            onChange={onChange}
          />
          <Button type="submit">
            Create{" "}
            <span className={styles.span_icon}>
              <img src={Plus} alt="" />
            </span>{" "}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
