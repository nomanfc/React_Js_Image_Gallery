import React from "react";

export default function Input({
  type,
  name,
  className,
  checked,
  onChange,
  id,
  style,
  accept,
}) {
  return (
    <input
      type={type}
      name={name}
      checked={checked}
      onChange={onChange}
      id={id}
      className={className}
      style={style}
      accept={accept}
    />
  );
}
