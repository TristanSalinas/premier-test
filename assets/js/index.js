const form = document.querySelector("form");
const button = document.querySelector("button");
const title = document.querySelector("#right-title");
let isLogged = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", () => {
  if (!isLogged){
    title.textContent = "Bienvenue !";
    button.textContent = "SE DECONNECTER"
    isLogged = true;
  } else {
    title.textContent = "Préparez vous pour l'aventure";
    button.textContent = "SE CONNECTER"
    isLogged = false
  }
});
