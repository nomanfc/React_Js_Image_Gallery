import React from "react";
import { Text } from "../atoms/Text";
import styles from "./molecules.module.css";

export function HeaderTitle({ countSelection, showMessage }) {
  return (
    <Text
      className={styles.title}
      style={{ display: countSelection < 1 && !showMessage ? "flex" : "none" }}
    >
      Image Gallery
    </Text>
  );
}


