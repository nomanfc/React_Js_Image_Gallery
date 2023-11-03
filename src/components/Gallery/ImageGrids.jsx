import React from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "../../styles/gallery.module.css";

export default function ImageCard({
  src,
  title,
  id,
  index,
  moveImage,
  selectedImages,
  toggleImageSelection,
}) {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      if (dragIndex === index) {
        return;
      }
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (
        (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) ||
        (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)
      ) {
        moveImage(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const isSelected = selectedImages.includes(id);

  return (
    <div ref={ref} style={{ opacity }} className={styles.gridItem}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggleImageSelection(id)}
        />
      </div>
      <img
        src={src}
        alt={title}
        height="100%"
        width="100%"
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
}
