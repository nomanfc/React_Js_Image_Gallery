import React from "react";
import styles from "./atoms.module.css";

export default function Button({ title, onClick, countSelection }) {
  return (
    <button className={styles.button} onClick={onClick} style={{display: countSelection < 1 ? "none" : "flex"}}>
      {title}
    </button>
  );
}
