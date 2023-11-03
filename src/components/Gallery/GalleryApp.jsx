import React,{ useState, useCallback } from "react";
import galleryList from "./data"
import ImageCard from "./ImageGrids"
import styles from "../../styles/gallery.module.css";


export default function GalleryApp() {
  const [images, setImages] = useState(galleryList);
  
  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];
      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  return (
    <main>
      {React.Children.toArray(
        images.map((image, index) => (
          <ImageCard
            src={image.img}
            title={image.title}
            id={image.id}
            index={index}
            moveImage={moveImage}
          />
        ))
      )}
    </main>
  );
}

// const [selectedImages, setSelectedImages] = useState([]);
// const [imageFileNames, setImageFileNames] = useState(imageFileName);

// const [, drop] = useDrop({
//   accept: "IMAGE",
//   drop: (draggedImage) => {
//     const oldIndex = imageFileNames.indexOf(draggedImage.fileName);
//     const newIndex = imageFileNames.indexOf(draggedImage.fileName);
//     if (oldIndex !== newIndex) {
//       const newImageFileNames = [...imageFileNames];
//       newImageFileNames.splice(oldIndex, 1);
//       newImageFileNames.splice(newIndex, 0, draggedImage.fileName);
//       setImageFileNames(newImageFileNames);
//     }
//   },
// });

// const DraggableImage = ({ fileName, index }) => {
//   const [, ref] = useDrag({
//     type: "IMAGE",
//     item: { fileName },
//   });

//   return (
//     <div ref={(node) => ref(drop(node))} className={styles.gridItem}>
//       <div className={styles.checkbox}>
//         <input
//           type="checkbox"
//           checked={selectedImages.includes(fileName)}
//           onChange={() => toggleImageSelection(fileName)}
//         />
//       </div>
//       <img
//         src={process.env.PUBLIC_URL + "/images/" + fileName}
//         alt={`Image ${index + 1}`}
//         width="100%"
//         height="100%"
//         style={{ borderRadius: "10px" }}
//       />
//     </div>
//   );
// };

// const toggleImageSelection = (fileName) => {
//   if (selectedImages.includes(fileName)) {
//     setSelectedImages(selectedImages.filter((name) => name !== fileName));
//   } else {
//     setSelectedImages([...selectedImages, fileName]);
//   }
// };

// const removeSelectedImages = () => {
//   const remainingImages = imageFileNames.filter(
//     (fileName) => !selectedImages.includes(fileName)
//   );
//   setImageFileNames(remainingImages);
//   setSelectedImages([]); // Clear the selected images
// };

// console.log(selectedImages);

// return (
//   <div className={styles.outerContainer}>
//       <div className={styles.mainContainer}>
//         <div className={styles.navbar}>
//           {" "}
//           <button onClick={removeSelectedImages}>
//             Remove Selected Images
//           </button>
//         </div>

//         <div className={styles.imageContainer}>
//           <div className={styles.imageGrids}>
//             <div className={styles.featuredImage}>
//               <div className={styles.checkbox}>
//                 <input
//                   type="checkbox"
//                   checked={selectedImages.includes("image-11.jpeg")}
//                   onChange={() => toggleImageSelection("image-11.jpeg")}
//                 />
//               </div>
//               <img
//                 src={process.env.PUBLIC_URL + "/images/image-11.jpeg"}
//                 width="100%"
//                 height="100%"
//                 style={{ borderRadius: "10px" }}
//               />
//             </div>
//             {imageFileNames.map((fileName, index) => (
//               <DraggableImage key={index} fileName={fileName} index={index} />
//             ))}
//             <div className={styles.gridItem}>Image 1</div>
//           </div>
//         </div>
//       </div>
//   </div>
// );
