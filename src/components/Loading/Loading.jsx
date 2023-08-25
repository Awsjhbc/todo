import styles from "./Loading.module.css";

export const LoadingSpinner = () => {
  return (
    <>
      <div className={styles.spinnerContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    </>
  );
};
