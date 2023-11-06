import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const isTouchDevice = "ontouchstart" in window;

const backend = isTouchDevice ? TouchBackend : HTML5Backend;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DndProvider backend={backend}>
      <App />
    </DndProvider>
  </React.StrictMode>
);
