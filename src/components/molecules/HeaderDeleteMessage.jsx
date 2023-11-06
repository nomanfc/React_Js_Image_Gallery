import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Text } from "../atoms/Text";
import styles from "./molecules.module.css";

function DeleteMessage({ showMessage }) {
  return (
    <Text
      tag="p"
      className={styles.textDelete}
      style={{ display: showMessage ? "flex" : "none" }}
    >
      <BsFillCheckCircleFill
        style={{ fontSize: "20px", paddingRight: "10px" }}
      />
      Deletion Complete
    </Text>
  );
}

export default DeleteMessage;
