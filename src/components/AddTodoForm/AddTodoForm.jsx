/* eslint-disable react/prop-types */
import Plus from "../../assets/plus.svg";
import Button from "../Button/Button";
import styles from "./AddTodoForm.module.css";

const AddTodoForm = ({ value, addTodo, handleSubmit, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
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

          <Button onClick={addTodo} type="submit">
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
