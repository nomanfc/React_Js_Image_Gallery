# React Js Image Gallery

The project is made with React js using Atomic Design Pattern.

Inside the `component` folder, there are `atoms`, `molecules`, `organisms`, and `pages` folders.

## Atoms

Smallest single elements are here in this folder. These will be reused all over the app.

- Button
- Image
- Input
- Text

`atoms.module.css`

## Molecules

This folder contains components that are using atoms.

- GalleryUploadButton: It is the upload button in the image gallery.
- HeaderDeleteMessage: This is a deletion message shown after files are deleted.
- HeaderSelectedText: How many items are selected shown from here.
- HeaderTitle: It is the title of the Image Gallery.
- ImageCardsCheckbox: Checkbox used on images.

`molecules.module.css`: Corresponding CSS files are here.

## Organisms

This folder contains organs built by using molecules.

- Header: It combines the header molecules. It is the top bar where different messages are shown.
- ImageCards: It combines image and checkbox together.

## Pages

`Gallery`: It is the main file that holds everything. It contains `ImageCards` and `Header`.

## Custom Hooks

It contains different custom hooks used in this App.

- `useDragAndDrop`: It controls the drag and drop of images in the gallery.
- `useMoveImage`: It controls the re-ordering movement used in `useDragAndDrop`.
- `useRemove`: It handles the delete operation.
- `useShowMessage`: It handles the message shown after deletion.
- `useToggleSelection`: It controls the selection toggle. Keeps count of how many items are selected.

## Data

Images used in this App.

`data`: It is an array of objects of given images, which contain title, src, id.

## Styles

It contains shared styles used in the gallery page and organisms.

- `index`: It controls the imported font used in this app and some default CSS properties.
- `styles.module.css`: It holds the CSS used in multiple components and media queries.
