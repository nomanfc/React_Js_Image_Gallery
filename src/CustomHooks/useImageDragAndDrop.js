import { useDrag, useDrop } from "react-dnd";

export function useImageDragAndDrop(id, index, moveImage, ref) {
  // Create a drop target using useDrop
  const [, drop] = useDrop({
    accept: "image",

    // This function is called when an item is hovered over this drop target
    hover: (item) => {
      const dragIndex = item.index;
      if (dragIndex === index) {
        return;
      }
      const hoverIndex = index;

      // Call the moveImage function to reorder the images
      if (dragIndex !== hoverIndex) {
        moveImage(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  // Create a draggable item using useDrag
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { id, index },

    // Check if the item is currently being dragged
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Set opacity based on whether the item is being dragged
  const opacity = isDragging ? 0 : 1;

  // Combine the drag and drop operations for this item
  drag(drop(ref));

  return { opacity };
}
