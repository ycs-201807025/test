const divArea = document.querySelector("#divArea");

divArea.addEventListener("mouseenter", () => {
  divArea.style.background = "blue";
});
divArea.addEventListener("mouseleave", () => {
  divArea.style.background = "aquamarine";
});