import React from "react";
import Button from "../atoms/Button";
import useShowMessage from "../../customHooks/useShowMessage";
import { SelectedText } from "../molecules/HeaderSelectedText";
import DeleteMessage from "../molecules/HeaderDeleteMessage";
import { HeaderTitle } from "../molecules/HeaderTitle";
import styles from "../../styles/styles.module.css";

export function Header({ removeSelectedImages, selectedImages }) {
  const { showMessage, handleRemoveSelectedImages } =
    useShowMessage(removeSelectedImages);
  const countSelection = selectedImages.length;

  return (
    <div className={styles.navbar}>
      <div>
        <HeaderTitle
          countSelection={countSelection}
          showMessage={showMessage}
        />
        <DeleteMessage showMessage={showMessage} />
        <SelectedText countSelection={countSelection} />
      </div>
      <div>
        <Button
          title="Delete"
          onClick={handleRemoveSelectedImages}
          countSelection={countSelection}
        />
      </div>
    </div>
  );
}
