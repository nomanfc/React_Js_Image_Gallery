import { useState } from "react";

// Custom hook for showing a message and handling image removal
export default function useShowMessage(removeSelectedImages) {
  const [showMessage, setShowMessage] = useState(false);

  // Function to display a message for 3 seconds
  const showMessageFor3Seconds = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  // Function to handle removing selected images
  const handleRemoveSelectedImages = () => {
    // Call the provided removeSelectedImages function to remove selected images
    removeSelectedImages();
    showMessageFor3Seconds();
  };

  // Return an object with the showMessage state and handleRemoveSelectedImages function
  return {
    showMessage,
    handleRemoveSelectedImages,
  };
}
