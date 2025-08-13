const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});