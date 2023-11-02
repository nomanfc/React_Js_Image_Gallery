import { useState } from "react";
import styles from "../../styles/gallery.module.css";
import ImageGrids from "./ImageGrids";
import NavBar from "./NavBar";

export default function GalleryApp() {
  const imageFileName = [
    "image-1.webp",
    "image-2.webp",
    "image-3.webp",
    "image-4.webp",
    "image-5.webp",
    "image-6.webp",
    "image-7.webp",
    "image-8.webp",
    "image-9.webp",
    "image-10.jpeg",
  ];

  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFileNames, setImageFileNames] = useState(imageFileName);

  const toggleImageSelection = (fileName) => {
    if (selectedImages.includes(fileName)) {
      setSelectedImages(selectedImages.filter((name) => name !== fileName));
    } else {
      setSelectedImages([...selectedImages, fileName]);
    }
  };

  const removeSelectedImages = () => {
    const remainingImages = imageFileNames.filter((fileName) => !selectedImages.includes(fileName));
    setImageFileNames(remainingImages);
    setSelectedImages([]); // Clear the selected images
  };

  console.log(selectedImages);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.navbar}>
          {" "}
          <button onClick={removeSelectedImages}>Remove Selected Images</button>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageGrids}>
            <div className={styles.featuredImage}>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedImages.includes("image-11.jpeg")}
                  onChange={() => toggleImageSelection("image-11.jpeg")}
                />
              </div>
              <img
                src={process.env.PUBLIC_URL + "/images/image-11.jpeg"}
                width="100%"
                height="100%"
                style={{ borderRadius: "10px" }}
              />
            </div>
            {imageFileNames.map((fileName, index) => (
              <div key={index} className={styles.gridItem}>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={selectedImages.includes(fileName)}
                    onChange={() => toggleImageSelection(fileName)}
                  />
                </div>
                <img
                  src={process.env.PUBLIC_URL + "/images/" + fileName}
                  alt={`Image ${index + 1}`}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            ))}
            <div className={styles.gridItem}>Image 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
