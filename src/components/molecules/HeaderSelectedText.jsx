import { FaCheckSquare } from "react-icons/fa";
import { Text } from "../atoms/Text";
import styles from "./molecules.module.css";

export function SelectedText({ countSelection }) {
  return (
    <Text
      tag="p"
      className={styles.text}
      style={{ display: countSelection < 1 ? "none" : "flex" }}
    >
      <FaCheckSquare
        style={{ color: "green", fontSize: "20px", paddingRight: "10px" }}
      />
      {countSelection > 1
        ? `${countSelection} Files Selected`
        : `${countSelection} File Selected`}
    </Text>
  );
}
