export function useRemove(setImages, selectedImages, setSelectedImages) {
  // Define a function to remove selected images from the state
  const removeSelectedImages = () => {
    // Filter the previous images array to exclude selected images
    setImages((prevImages) =>
      prevImages.filter((image) => !selectedImages.includes(image.id))
    );

    // Clear the selection by setting the selected images to an empty array
    setSelectedImages([]);
  };

  // Return an object containing the removeSelectedImages function
  return { removeSelectedImages };
}
