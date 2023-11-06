import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Button from "../atoms/Button";
import styles from "../../styles/styles.module.css";
import useShowMessage from "../../CustomHooks/useShowMessage";

export default function NavBar({ removeSelectedImages, selectedImages }) {
  const { showMessage, handleRemoveSelectedImages } =
    useShowMessage(removeSelectedImages);
  const countSelection = selectedImages.length;

  const renderTitle = () => (
    <div
      className={styles.title}
      style={{ display: countSelection < 1 && !showMessage ? "flex" : "none" }}
    >
      Image Gallery
    </div>
  );

  const renderText = () => (
    <div
      className={styles.text}
      style={{ display: countSelection < 1 ? "none" : "flex" }}
    >
      <FaCheckSquare
        style={{ color: "green", fontSize: "20px", paddingRight: "10px" }}
      />
      {countSelection > 1
        ? `${countSelection} Files Selected`
        : `${countSelection} File Selected`}
    </div>
  );

  const renderDeleteMessage = () => (
    <div
      className={styles.textDelete}
      style={{ display: showMessage ? "flex" : "none" }}
    >
      <BsFillCheckCircleFill
        style={{ fontSize: "20px", paddingRight: "10px" }}
      />
      Deletion Complete
    </div>
  );

  return (
    <div className={styles.navbar}>
      <div>
        {renderDeleteMessage()}
        {renderTitle()}
        {renderText()}
      </div>
      <div style={{ height: "35px" }}>
        <Button
          title="Delete"
          onClick={handleRemoveSelectedImages}
          countSelection={countSelection}
        />
      </div>
    </div>
  );
}
