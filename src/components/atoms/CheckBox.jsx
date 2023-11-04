import React from "react";
import styles from "../../styles/gallery.module.css";

export function Checkbox({ isSelected, toggleImageSelection, id, keepCheckBoxVisible}) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={isSelected}
      className={styles.checkbox}
      style={{opacity: keepCheckBoxVisible ? 1:0}}
      onChange={() => toggleImageSelection(id)}
    />
  );
}
