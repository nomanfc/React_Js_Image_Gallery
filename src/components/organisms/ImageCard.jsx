import React, { useState, useRef } from "react";
import { useImageDragAndDrop } from "../../customHooks/useImageDragAndDrop";
import { Checkbox } from "../molecules/ImageCardsCheckBox";
import { Image } from "../atoms/Image";
import styles from "../../styles/styles.module.css";

export default function ImageCard({
  src,
  title,
  id,
  index,
  selectedImages,
  toggleImageSelection,
  moveImage,
}) {
  // Create a ref to manage the drag-and-drop behavior
  const ref = useRef(null);

  // Get the opacity and other drag-and-drop functionality using a custom hook
  const { opacity } = useImageDragAndDrop(id, index, moveImage, ref);
  const isSelected = selectedImages.includes(id);
  // State to control whether to keep the checkbox visible
  const [keepCheckBoxVisible, setKeepCheckBoxVisible] = useState(false);

  // Function to handle toggling image selection
  const handleToggleSelection = () => toggleImageSelection(id);

  return (
    <div
      ref={ref}
      style={{ opacity }}
      className={styles.gridItem}
      onMouseEnter={() => setKeepCheckBoxVisible(true)}
      onMouseLeave={() => setKeepCheckBoxVisible(isSelected ? true : false)}
    >
      <Checkbox
        isSelected={isSelected}
        toggleImageSelection={handleToggleSelection}
        id={id}
        keepCheckBoxVisible={keepCheckBoxVisible}
      />
      <Image src={src} title={title} />
    </div>
  );
}
