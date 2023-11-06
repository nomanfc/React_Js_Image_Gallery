import { useDrag, useDrop } from "react-dnd";

export function useImageDragAndDrop(id, index, moveImage, ref) {
  const [, drop] = useDrop({
    accept: "image",
    hover: (item) => {
      const dragIndex = item.index;
      if (dragIndex === index) {
        return;
      }
      const hoverIndex = index;

      if (dragIndex !== hoverIndex) {
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

  return { opacity };
}
