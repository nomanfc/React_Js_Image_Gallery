import React from 'react';
import styles from './molecules.module.css';

function ImageUploadButton() {
  return (
    <div className={styles.imageUploadContainer}>
      <label htmlFor="file" className={styles.imageUploadButton}>
        <img src="./icons/upload.png" alt="Upload Icon" className={styles.imageUploadIcon} />
        <span className={styles.imageUploadLabel}>Add Image</span>
      </label>
      <input type="file" id="file" accept="image/*" style={{ display: 'none' }} />
    </div>
  );
}

export default ImageUploadButton;
