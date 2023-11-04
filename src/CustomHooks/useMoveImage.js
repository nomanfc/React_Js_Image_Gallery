import { useState, useCallback } from "react";

export function useMoveImage(initialImages) {
  const [images, setImages] = useState(initialImages);

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevImages) => {
      const clonedImages = [...prevImages];
      const [removedImage] = clonedImages.splice(dragIndex, 1);
      clonedImages.splice(hoverIndex, 0, removedImage);
      return clonedImages;
    });
  }, []);

  return { images, setImages, moveImage };
}
