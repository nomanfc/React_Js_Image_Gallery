import React from "react";

export function Text({ tag, children, className, style }) {
  const Tag = tag || "div";

  const combinedStyles = {
    ...style,
    padding: 0,
    margin: 0,
  };

  return (
    <Tag className={className} style={combinedStyles}>
      {children}
    </Tag>
  );
}
