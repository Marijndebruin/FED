// JavaScript Document
var deButton = document.querySelector("button");

deButton.addEventListener("click", toonMenu);

function toonMenu() {
	var hetMenu = document.querySelector("ul");
	var deNav = document.querySelector("nav");
	hetMenu.classList.toggle("toonMenu");
	deNav.classList.toggle("menuOpen");
}