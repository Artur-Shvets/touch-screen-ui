"use strict";

const workSpace = document.getElementById("work-space");
const leftMenu = document.getElementById("left-menu");
const mainContent = document.getElementById("main-content");
workSpace.scrollTo(1100, 1400);
workSpace.classList.remove("space-stop");
let isTouchStart = false;
let isDragMove = false;
let xOffset = 0;
let yOffset = 0;
let countOfBlock = -1;
let draggableElement = false;

const handlePointerDown = (e) => {
  workSpace.classList.toggle("space-stop", e.target.id === "left-menu");
  if (e.target.classList.contains("sample-block")) {
    e.preventDefault();
    xOffset = e.offsetX;
    yOffset = e.offsetY;
    document.addEventListener("pointermove", handlePointerMove);
    isTouchStart = true;
  }
  leftMenu.classList.toggle("left-menu-open", e.target.id === "left-menu");
  console.log("DOWN", e.target);
};

const handlePointerMove = (e) => {
  if (isTouchStart) {
    if (isDragMove) {
      draggableElement.style.left = `${Math.round(e.clientX)}px`;
      draggableElement.style.top = `${Math.round(e.clientY)}px`;
    } else {
      if (e.offsetX !== xOffset) {
        countOfBlock++;
        draggableElement = e.target.cloneNode(true);
        e.target.releasePointerCapture(e.pointerId);
        draggableElement.classList.remove("sample-block");
        draggableElement.classList.add("draggable");
        document.body.append(draggableElement);
        isDragMove = true;
        console.log("MOVE");
      }
    }
  }
};

const handlePointerUp = (e) => {
  if (draggableElement) {
    e.preventDefault();
    draggableElement.classList.add("main-block");
    draggableElement.classList.remove("draggable");
    mainContent.append(draggableElement);
    draggableElement.style.left = `${Math.round(e.offsetX)}px`;
    draggableElement.style.top = `${Math.round(
      e.offsetY - countOfBlock * 100
    )}px`;
    document.removeEventListener("pointermove", handlePointerMove);
    draggableElement = false;
  }
  isTouchStart = false;
  isDragMove = false;
  xOffset = 0;
  yOffset = 0;
  console.log("UP");
};

document.addEventListener("pointerdown", handlePointerDown);
document.addEventListener("pointermove", handlePointerMove);
document.addEventListener("pointerup", handlePointerUp);
