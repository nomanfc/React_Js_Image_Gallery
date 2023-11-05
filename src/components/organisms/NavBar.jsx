import styles from "../../styles/gallery.module.css";

export default function NavBar({ removeSelectedImages, selectedImages }) {
  let countSelection = selectedImages.length;

  return (
    <div>
      <div className={styles.navbar}>
        <div>
          <div style={{ display: countSelection < 1 ? "block" : "none" }}>
            Image Gallery
          </div>
          <div style={{ display: countSelection < 1 ? "none" : "block" }}>
            {countSelection > 1
              ? countSelection + " Files Selected"
              : countSelection + " File Selected"}
          </div>
        </div>
        <div>
          <button onClick={removeSelectedImages}>Remove</button>
        </div>
      </div>
    </div>
  );
}
