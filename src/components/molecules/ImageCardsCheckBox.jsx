import React from "react";
import Input from "../atoms/Input";
import styles from "./molecules.module.css";


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
    <Input
      type="checkbox"
      id={id}
      checked={isSelected}
      className={styles.checkbox}
      style={checkboxStyle}
      onChange={() => toggleImageSelection(id)}
    />
  );
}
