import { FaCheckSquare } from "react-icons/fa";
import Button from "../atoms/Button";
import styles from "../../styles/styles.module.css";

export default function NavBar({ removeSelectedImages, selectedImages }) {
  let countSelection = selectedImages.length;

  return (
    <div>
      <div className={styles.navbar}>
        <div>
          <div
            className={styles.title}
            style={{ display: countSelection < 1 ? "flex" : "none" }}
          >
            Image Gallery
          </div>
          <div
            className={styles.text}
            style={{ display: countSelection < 1 ? "none" : "flex" }}
          >
            <FaCheckSquare
              style={{ color: "green", fontSize: "20px", paddingRight: "10px" }}
            />

            {countSelection > 1
              ? countSelection + "  Files Selected"
              : countSelection + " File Selected"}
          </div>
        </div>
        <div style={{ height: "35px" }}>
          <Button
            title="Delete"
            onClick={removeSelectedImages}
            countSelection={countSelection}
          />
        </div>
      </div>
    </div>
  );
}
