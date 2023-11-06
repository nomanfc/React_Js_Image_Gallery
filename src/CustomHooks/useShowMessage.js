import React, { useState, useEffect } from "react";

export default function useShowMessage(removeSelectedImages) {
  const [showMessage, setShowMessage] = useState(false);

  const showMessageFor3Seconds = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  const handleRemoveSelectedImages = () => {
    removeSelectedImages();
    showMessageFor3Seconds();
  };

  return {
    showMessage,
    handleRemoveSelectedImages,
  };
}
