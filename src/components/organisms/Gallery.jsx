import React from "react";
import galleryList from "../../data/data";
import ImageCard from "../molecules/ImageCard";
import { useToggleSelection } from "../../CustomHooks/useToggleSelection";
import { useMoveImage } from "../../CustomHooks/useMoveImage";
import { useRemove } from "../../CustomHooks/useRemove";
import ImageUploadButton from "../molecules/UploadButton";
import NavBar from "./NavBar";
import styles from "../../styles/styles.module.css";

export default function Gallery() {
  const { selectedImages, setSelectedImages, toggleImageSelection } =
    useToggleSelection();
  const { images, setImages, moveImage } = useMoveImage(galleryList);
  const { removeSelectedImages } = useRemove(
    setImages,
    selectedImages,
    setSelectedImages
  );

  const renderImageCard = (image, index) => (
    <ImageCard
      key={image.id}
      src={image.img}
      title={image.title}
      id={image.id}
      index={index}
      moveImage={moveImage}
      selectedImages={selectedImages}
      toggleImageSelection={toggleImageSelection}
    />
  );

  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <NavBar
          removeSelectedImages={removeSelectedImages}
          selectedImages={selectedImages}
        />
        <div className={styles.imageContainer}>
          <div className={styles.imageGrids}>
            {images.map((image, index) => renderImageCard(image, index))}
            <div className={styles.gridItem}>
              <ImageUploadButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
