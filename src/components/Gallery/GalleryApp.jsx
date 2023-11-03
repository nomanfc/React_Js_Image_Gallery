import React, { useState, useCallback } from "react";
import galleryList from "./data";
import ImageCard from "./ImageGrids";
import styles from "../../styles/gallery.module.css";

function GalleryApp() {
  const [images, setImages] = useState(galleryList);
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (imageId) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(imageId)) {
        return prevSelectedImages.filter((id) => id !== imageId);
      } else {
        return [...prevSelectedImages, imageId];
      }
    });
  };

  const removeSelectedImages = () => {
    setImages((prevImages) =>
      prevImages.filter((image) => !selectedImages.includes(image.id))
    );
    setSelectedImages([]);
  };

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevImages) => {
      const clonedImages = [...prevImages];
      const removedImage = clonedImages.splice(dragIndex, 1)[0];
      clonedImages.splice(hoverIndex, 0, removedImage);
      return clonedImages;
    });
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.navbar}>
          <button onClick={removeSelectedImages}>Remove</button>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageGrids}>
            {images.map((image, index) => (
              <ImageCard
                key={image.id}
                src={image.img}
                title={image.title}
                id={image.id}
                index={index}
                moveImage={moveImage}
                selectedImages={selectedImages}
                toggleImageSelection={toggleImageSelection}
                removeSelectedImages={removeSelectedImages}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryApp;
