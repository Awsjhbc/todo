import styles from "./Input.module.css";
import Button from "../Button/button";
import Plus from "../../assets/plus.svg";

import useInputState from "../Hooks/InputHook/useInputState";

const InputForm = () => {
  const TaskValue = useInputState("");

  return (
    <div className={styles.input}>
      <div className="createTask">
        <input
          name="description"
          type="textarea"
          className="input"
          placeholder="Create new task"
          value={TaskValue.value}
          onChange={TaskValue.onChange}
        />

        <Button onClick={TaskValue.addTask} className={styles.button}>
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
