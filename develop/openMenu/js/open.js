const menu = document.querySelector("#menu");
const toggleBtn = document.querySelector("#toggleBtn");


toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});