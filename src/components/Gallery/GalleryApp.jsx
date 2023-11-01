import styles from "../../styles/gallery.module.css";
import ImageGrids from "./ImageGrids";
import NavBar from "./NavBar";

export default function GalleryApp() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <NavBar/>
        <ImageGrids/>
      </div>
    </div>
  );
}
