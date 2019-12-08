
var link = document.querySelector(".btn--contacts");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".btn--close");
var form = document.querySelector(".write-us__form");
var login = document.querySelector("[name=login]");
var email = document.querySelector("[name=email]");
var comment = document.querySelector("[name=commeny]");
var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".map");
var buy = document.querySelector(".btn--shop-item");
var cart = document.querySelector(".cart");

if (link) {
	link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup--show");
	});
}
if (mapLink) {
	mapLink.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.add("popup--show");
	});
}
//При нажатии крестика закрывается окно
let closes = document.querySelectorAll(".btn-close");
for (let btnClose of closes) {
  btnClose.onclick = function(event) {

	if (popup) {
		if (popup.classList.contains("popup--show")) {
			event.preventDefault();
			popup.classList.remove("popup--show");
			popup.classList.remove("popup--error");		
			}
		}
		if (map) {
			if (map.classList.contains("popup--show")) {
				event.preventDefault();
				map.classList.remove("popup--show");
			}
		}
		if (cart) {
			if (cart.classList.contains("popup--show")) {
				event.preventDefault();
				cart.classList.remove("popup--show");
			}
		}
	}
}
//При нажатии сабмит срабатывает ошибка
if (form) {
	form.addEventListener("submit", function(event) {
	if (!login.value || !email.value || !comment.value) {
	event.preventDefault();
	popup.classList.add("popup--error");
	}
	});
}
//При нажатии Esc закрывается окно
	window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup) {
			if (popup.classList.contains("popup--show")) {
			popup.classList.remove("popup--show");
			}
		}
		if (map) {
			if (map.classList.contains("popup--show")) {
			map.classList.remove("popup--show");
			}
		}
		if (cart) {
			if (cart.classList.contains("popup--show")) {
			cart.classList.remove("popup--show");
			}
		}
	}
	});

let buys = document.querySelectorAll(".btn--shop-item");
for (let btnShop of buys) {
  btnShop.onclick = function(event) {
		if (buy) {
			event.preventDefault();
			cart.classList.add("popup--show");
		}
  }
}
if (cart) {
	close.addEventListener("click", function(event) {
	event.preventDefault();
	cart.classList.remove("popup--show");
	});
}