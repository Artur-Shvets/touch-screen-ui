const workSpace = document.getElementById("work-space");
workSpace.scrollTo(1100, 1400);

let isPointerDown = false;
let downX;
let downY;

document.addEventListener(
  "pointerdown",
  (e) => {
    downX = e.clientX;
    downY = e.clientY;
    isPointerDown = true;
  },
  { passive: true }
);

document.addEventListener("pointermove", (e) => {
  if (isPointerDown) {
    const { scrollLeft, scrollTop } = workSpace;
    const differenceX = Math.abs(downX - e.clientX);
    const differenceY = Math.abs(downY - e.clientY);

    workSpace.scrollLeft =
      e.clientX >= downX ? scrollLeft - differenceX : scrollLeft + differenceX;
    workSpace.scrollTop =
      e.clientY >= downY ? scrollTop - differenceY : scrollTop + differenceY;

    downX = e.clientX;
    downY = e.clientY;
  }
});

document.addEventListener("pointerup", (e) => {
  isPointerDown = false;
});
