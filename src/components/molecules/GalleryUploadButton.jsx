import React from "react";
import { Image } from "../atoms/Image";
import Input from "../atoms/Input";
import styles from "./molecules.module.css";

function ImageUploadButton() {
  return (
    <div className={styles.imageUploadContainer}>
      <label htmlFor="file" className={styles.imageUploadButton}>
        <div className={styles.imageUploadIcon}>
          <Image src="./icons/upload.png" title="Upload Icon" />
        </div>

        <span className={styles.imageUploadLabel}>Add Image</span>
      </label>
      <Input
        type="file"
        id="file"
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ImageUploadButton;
