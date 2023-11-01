import styles from "../../styles/gallery.module.css";

export default function GalleryApp() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.navbar}>
          Nav here
        </div>
        <div className={styles.imageGrid}>
          Image Grids
        </div>
      </div>
    </div>
  );
}
