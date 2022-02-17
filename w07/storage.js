let body = document.querySelector("body");
localStorage.setItem("bgcolor", "0000FF");

var currentColor = localStorage.getItem("bgcolor")

body.style.backgroundColor = "#" + currentColor;