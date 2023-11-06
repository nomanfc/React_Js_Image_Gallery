import React from "react";
import { galleryList } from "../../data/data";
import ImageCard from "../organisms/ImageCard";
import { useToggleSelection } from "../../customHooks/useToggleSelection";
import { useMoveImage } from "../../customHooks/useMoveImage";
import { useRemove } from "../../customHooks/useRemove";
import ImageUploadButton from "../molecules/GalleryUploadButton";
import { Header } from "../organisms/Header";
import styles from "../../styles/styles.module.css";

export default function Gallery() {
  // Initialize custom hooks to manage selection, image movement, and removal
  const { selectedImages, setSelectedImages, toggleImageSelection } =
    useToggleSelection();
  const { images, setImages, moveImage } = useMoveImage(galleryList);
  const { removeSelectedImages } = useRemove(
    setImages,
    selectedImages,
    setSelectedImages
  );

    // Function to render individual image cards
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
        <Header
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
