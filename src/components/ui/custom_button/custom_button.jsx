import React from "react";
import styles from "./custom_button.module.scss";

const CustomButton = ({ children, disabled, type, variant = 1, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.CustomButton} ${styles[`v${variant}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
