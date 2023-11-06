# React Js Image Gallery

The project is made with React js using Atomic Design Pattern.

Inside component folder there are atoms, molecules, organisms, and pages folder:


components

atoms:

Smallest single elements are here in this folder. These will be reused all over the app.

Button, 
Image, 
Input, 
Text  
atoms.module.css

molecules

This folder contains components which are using atoms.

GalleryUploadButton : It is the upload button in image gallery.
HeaderDeleteMessage : This is deletion message show after files are deleted.
HeaderSelectedText : How many Items are selected shown from here.
HeaderTitle: It is the title Image Gallery.
ImageCardsCheckbox : checkbox used on images.
molecules.module.css : corresponding css files are here.

organisms

This folder contains organs build by using molecules

Header : It combines the header molecules. It is the top bar here different message are shown.
ImageCards: It combines image and check box together.

pages

Gallery: It is the main file which holds everything. It contains imageCards and header. 

customHooks 

It contains different custom hooks used in this App

useDragAndDrop: It controls the drag and drop of images in the gallery.
useMoveImage: It controls the re-ordering movement used in useDragAndDrop.
useRemove: It handles the delete operation.
useShowMessage: It handles the message shown after deletion.
useToggleSelection: It controls the selection toggle. Keeps count of how many item selected.


data 

Images used in this App

data : It is the array of object of given images, which contain title, src, id.


styles 

It contains shared styles used in gallery page and organisms.

index: It controls the imported font used in this app and some default css properties.
styles.module.css: It holds the css used in multiple components and media queries. 
