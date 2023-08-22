import styles from "./Button.module.css";
import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, icon, type }) => (
  <button type={type} onClick={onClick} className={styles.button}>
    {icon && <span>{icon}</span>}
    {children}
  </button>
);

export default Button;
