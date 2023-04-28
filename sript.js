const responsive = document.querySelector(".responsive");
const menu = document.querySelector(".url");
const body = document.querySelector("body");
responsive.addEventListener("click", function () {
  menu.classList.toggle("active");
  responsive.classList.toggle("active")
});
