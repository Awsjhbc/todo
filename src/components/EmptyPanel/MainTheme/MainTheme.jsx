import styles from "./MainTheme.module.css";
import Clipboard from "../../../assets/Clipboard.png";

const MainTheme = () => {
  return (
    <div className={styles.empty_box}>
      <img src={Clipboard} alt="" />
      <p className={styles.firstline}>You do not have tasks registered yet</p>
      <p className={styles.secondline}>
        Create tasks and organize your to-do items
      </p>
    </div>
  );
};

export default MainTheme;
