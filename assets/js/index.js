const form = document.querySelector("form");
const button = document.querySelector("button");
const title = document.querySelector("#right-title");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", () => {
  title.textContent = "Bonjour venu d'index.js";
});
