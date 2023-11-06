import { useState, useCallback } from "react";

export function useMoveImage(initialImages) {
  const [images, setImages] = useState(initialImages);

  // Define a function to move an image from one index to another
  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevImages) => {
      // Clone the array of images to avoid mutating the state directly
      const clonedImages = [...prevImages];

      // Remove the image being dragged from its original position
      const [removedImage] = clonedImages.splice(dragIndex, 1);

      // Insert the removed image at the new position
      clonedImages.splice(hoverIndex, 0, removedImage);

      // Update the state with the new order of images
      return clonedImages;
    });
  }, []);

  return { images, setImages, moveImage };
}
