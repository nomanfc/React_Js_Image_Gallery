import React from "react";
import styles from "../../styles/gallery.module.css";

export function Image({ src, title }) {
  const imageStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
  };

  return <img src={src} alt={title} style={imageStyle} />;
}
