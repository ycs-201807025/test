const applyPropertyForm = document.querySelector("#applyProperty-form");
const divArea = document.querySelector("#divArea");

const width = document.querySelector("#width");
const height = document.querySelector("#height");
const bgColor = document.querySelector("#bgColor");
const radius = document.querySelector("#radius");
divArea.style.width = 123;
applyPropertyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  console.log(width.value);
});