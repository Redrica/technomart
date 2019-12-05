
let link = document.querySelector(".btn--contacts");
let popup = document.querySelector(".write-us");
let close = document.querySelector(".btn-close");
let closeMap = document.querySelector(".btn-close--map");
let form = popup.querySelector(".write-us__form");
let login = popup.querySelector("[name=login]");
let email = popup.querySelector("[name=email]");
let comment = popup.querySelector("[name=commeny]");
let mapLink = document.querySelector(".map-link");
let map = document.querySelector(".map");
let buy = document.querySelector(".btn--shop-item");
let cart = document.querySelector(".cart");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("popup--show");
});

buy.addEventListener("click", function(event) {
event.preventDefault();
cart.classList.add("popup--show");
});

//При нажатии крестика закрывается окно
close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("popup--show");
popup.classList.remove("popup--error");
});

//При нажатии крестика закрывается окно
closeMap.addEventListener("click", function(event) {
event.preventDefault();
map.classList.remove("popup--show");
});

//При нажатии сабмит сразатывает ошибка
form.addEventListener("submit", function(event) {
if (!login.value || !email.value || !comment.value) {
event.preventDefault();
popup.classList.add("popup--error");
}
});

//При нажатии Esc закрывается окно
window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (popup.classList.contains("popup--show")) {
popup.classList.remove("popup--show");
}
if (map.classList.contains("popup--show")) {
map.classList.remove("popup--show");
}
}
});

//Открываем карту расширенную 
mapLink.addEventListener("click", function(event) {
event.preventDefault();
map.classList.add("popup--show");
});