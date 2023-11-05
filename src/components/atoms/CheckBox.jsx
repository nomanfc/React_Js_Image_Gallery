import React from "react";
import styles from "./atoms.module.css";

export function Checkbox({
  isSelected,
  toggleImageSelection,
  id,
  keepCheckBoxVisible,
}) {
  const checkboxStyle = {
    opacity: keepCheckBoxVisible ? 1 : 0,
  };

  return (
    <input
      type="checkbox"
      id={id}
      checked={isSelected}
      className={styles.checkbox}
      style={checkboxStyle}
      onChange={() => toggleImageSelection(id)}
    />
  );
}
