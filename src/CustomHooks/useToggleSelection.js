import { useState } from "react";

// Custom hook for toggling image selection
export function useToggleSelection() {
  const [selectedImages, setSelectedImages] = useState([]);

  // Function to toggle the selection of an image
  const toggleImageSelection = (imageId) => {
    setSelectedImages(
      (prevSelectedImages) =>
        prevSelectedImages.includes(imageId)
          ? prevSelectedImages.filter((id) => id !== imageId) // Deselect the image if it's already selected
          : [...prevSelectedImages, imageId] // Select the image if it's not selected
    );
  };

  return { selectedImages, setSelectedImages, toggleImageSelection };
}
