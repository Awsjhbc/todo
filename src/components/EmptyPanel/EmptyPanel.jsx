import styles from "./EmptyPanel.module.css";

// eslint-disable-next-line react/prop-types
const EmptyPanel = ({ TaskValueCounter }) => {
  return (
    <>
      <div className={styles.task_body}>
        <div className={styles.tasks}>
          <div className={styles.info}>
            <div className={styles.created}>
              <p className={styles.created_text}>
                Created tasks {TaskValueCounter}
              </p>
            </div>
            <div>
              <p className={styles.completed_text}>Completed tasks 0</p>
            </div>
          </div>
          <div className={styles.empty}>{/**/}</div>
        </div>
      </div>
    </>
  );
};

export default EmptyPanel;
