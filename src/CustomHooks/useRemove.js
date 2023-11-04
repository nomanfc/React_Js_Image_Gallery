export function useRemove(setImages, selectedImages, setSelectedImages) {
  const removeSelectedImages = () => {
    setImages((prevImages) =>
      prevImages.filter((image) => !selectedImages.includes(image.id))
    );
    setSelectedImages([]);
  };

  return { removeSelectedImages };
}
