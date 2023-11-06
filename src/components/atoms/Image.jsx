import React from "react";

export function Image({ src, title, className}) {
  const imageStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
  };

  // Check if className is provided; if so, override the default style
  const finalImageStyle = className ? {} : imageStyle;

  return (
    <img
      src={src}
      alt={title}
      style={{ ...imageStyle, ...finalImageStyle }}
      className={className}
    />
  );
}
