import React, { useState, useRef } from "react";
import { useImageDragAndDrop } from "../../CustomHooks/useImageDragAndDrop";
import { Checkbox } from "../atoms/CheckBox";
import { Image } from "../atoms/Image";
import styles from "../../styles/gallery.module.css";

export default function ImageCard({
  src,
  title,
  id,
  index,
  selectedImages,
  toggleImageSelection,
  moveImage,
}) {
  const ref = useRef(null);
  const { opacity } = useImageDragAndDrop(id, index, moveImage, ref);
  const isSelected = selectedImages.includes(id);
  const [keepCheckBoxVisible, setKeepCheckBoxVisible] = useState(false);

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
