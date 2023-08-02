/* eslint-disable react/prop-types */
import styles from "./Input.module.css";

import Plus from "../../assets/plus.svg";

import Button from "../button/button";

const InputForm = ({ value, onChange, onAddTask }) => {
  return (
    <div className={styles.input}>
      <div className="createTask">
        <input
          name="description"
          type="textarea"
          className="input"
          placeholder="Create new task"
          value={value}
          onChange={onChange}
        />

        <Button onClick={onAddTask} className={styles.button}>
          Create{" "}
          <span className={styles.span_icon}>
            <img src={Plus} alt="" />
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default InputForm;
